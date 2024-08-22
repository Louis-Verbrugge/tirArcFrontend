
require('dotenv').config();

const fs = require('fs');

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');
const multer = require('multer');



const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000', // domaine du frontend
    credentials: true, // permet d'envoyer les cookies avec les requêtes
}));
app.use(require('cookie-parser')());

app.use(bodyParser.json({ limit: '50mb' })); // Augmentez la limite de taille de la requête si nécessaire





//dataBase MongoDB:
const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://louvbg:OhC2ipMSxJU1Mo4J@cluster0.z0dughd.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'databaseUsers' // Spécifiez la base de données par défaut ici

        });
        console.log("Connected correctly to server");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}
connectToDatabase().catch(console.dir);
//affiche database

// const aa = async() => {

//     const database = client.db("databaseUsers");
//     const ratings = database.collection("sales");
//     const cursor = ratings.find();
//     const data = await cursor.toArray();
//     res.json(data);
// };

// aa().catch(console.dir);




app.listen(port, () => { console.log(`Server is running on port ${port}`) });



const userSchemaDatabase = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    years: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, required: false}
});

const UserDatabase = mongoose.model('databaseUsers', userSchemaDatabase, 'sales'); // 'databaseUsers' est le nom de la collection

/*
async function findUserByEmail(email) {
    const orders = await UserDatabase.findOne({ email: email });
    return orders;
}


// Exemple d'utilisation de la fonction findUserByEmail
findUserByEmail("aaH")
    .then(user => {
        console.log("User found:", user);
        
}).catch(console.dir);
*/
/*
const supabase = require('@supabase/supabase-js');

const db = supabase.createClient(
    'https://umkpmqvmgiqsapyhmswu.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVta3BtcXZtZ2lxc2FweWhtc3d1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTk1MTI5NSwiZXhwIjoyMDM1NTI3Mjk1fQ.PNerNj1sQAcJZDb4zDkZKFhMenxP-sieFb_fYsulpkA'
);


//api renvoi les competitions entre 2 dates
app.get('/api/competition', async (req, res) => {
    const { startDate, endDate } = req.query;
    const { data, error } = await db
        .from('Competition')
        .select("*")
        .gte('dateEvent', startDate)
        .lte('dateEvent', endDate);

    res.json(data);
});

//api renvoi les competitions entre 2 dates
app.get('/api/competition/villeDinct', async (req, res) => {
    const { startDate, endDate } = req.query;
    const { data, error } = await db
        .from('Competition')
        .select("*")
        .gte('dateEvent', startDate)
        .lte('dateEvent', endDate);


    const listeCity = data.map((item) => item.lieu);
    const listeCityDinct = [...new Set(listeCity)]

    res.json(listeCityDinct);
});
*/


// Fonction utilitaire pour récupérer les informations de l'utilisateur
const getUserInfo = (token) => {

    if (token === undefined) {
        console.log("No token provided :/");
        throw new Error('No token provided');
    }

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY_TOKEN_USER, async (err, decoded) => {
            if (err) {
                console.log("No token provided :://");
                return reject(new Error('No token provided'));
            }

            // je recupere l'user par son id:
            const userDatabase = await UserDatabase.findById(decoded.userId);
            if (!userDatabase) {
                console.log("No token provided /");

                return reject(new Error('User not found'));
            }

            console.log("lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
            console.log(userDatabase);

            resolve(userDatabase);
        });
    });
};


// api pour envoyer un mail:
const { sendEmailT } = require('./test');

app.post('/sendEmail/', async (req, res) => {
    sendEmailT(req.query.firstName, req.query.lastName, req.query.age, req.query.email);
    res.send('Email envoyé');
});


// check login admin:
app.post('/api/login', async (req, res) => {

    const receivedStruct = req.body.credentials;
    
    if (receivedStruct.login === process.env.ADMIN_USER && await bcrypt.compare(receivedStruct.password, process.env.ADMIN_PASSWORD)) {
        
        jwt.sign({ isAdmin: true }, process.env.SECRET_KEY_TOKEN_ADMIN, { expiresIn: '3650d' }, (err, token) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to generate token' });
            }
            console.log("Admin connected : " + token);
            res.cookie('adminToken', token, { 
                httpOnly: false, 
                secure: true, 
                sameSite: 'None', // Ajoutez l'attribut SameSite
                maxAge: 3650 * 24 * 60 * 60 * 1000 // 3650 jours en millisecondes
            });     
            console.log("cookie ADMIN created");
            return res.json({ login: true, isAdmin: true });

        });

    } else {

        // test is user:
        let login = receivedStruct.login;
        console.log("email: " + login);
        const userDatabase = await UserDatabase.findOne({ email: login });
        console.log("userDatabase: " + userDatabase);
        if (userDatabase) {
            console.log(receivedStruct.password + " userDatabase.password: " + userDatabase.password);
            console.log(await bcrypt.compare(receivedStruct.password, userDatabase.password));
            if (await bcrypt.compare(receivedStruct.password, userDatabase.password)) {
                
                console.log("secret key: " + process.env.SECRET_KEY_TOKEN_USER);
                jwt.sign({ userId: userDatabase._id, isAdmin: false }, process.env.SECRET_KEY_TOKEN_USER, { expiresIn: '3650d' }, (err, token) => {
                    if (err) {
                        console.log("Failed to generate token user");
                        return res.status(500).json({ message: 'Failed to generate token user' });
                    }
                    console.log("User o connected ppoi : " + token);
                    //cree un cookie pour l'user:
                    res.cookie('tokenUser', token, { 
                        httpOnly: false, 
                        secure: true, 
                        sameSite: 'None', // Ajoutez l'attribut SameSite
                        maxAge: 3650 * 24 * 60 * 60 * 1000 // 3650 jours en millisecondes
                    });                    
                    console.log("cookie USER created");
                    console.log("Response headers:", res.getHeaders());

            

                    return res.json({ login: true, isAdmin: false });

                });
            } else {
                console.log("Invalid credentials :/");
                return res.status(401).json({ message: 'Invalid credentials', login: false, isAdmin: false });
            }   
        } else {
            console.log("Invalid credentials :(((((((");
            return res.status(401).json({ message: 'Invalid credentials', login: false, isAdmin: false });
        }


    };

});


//check if admin

app.post("/api/auth", async (req, res) => {



    const tokenAdmin = req.body.tokenAdmin;
    const tokenUser = req.body.tokenUser;

    console.log("tokenAdmin: " + tokenAdmin);

    try {
        if (tokenAdmin !== undefined) {
            if ( jwt.verify(tokenAdmin, process.env.SECRET_KEY_TOKEN_ADMIN) ) {
                
                return res.status(200).json({ adminAcces: true, login: true });

            }
        }
        else if (tokenUser !== undefined) {
    
            if ( jwt.verify(tokenUser, process.env.SECRET_KEY_TOKEN_USER) ) {
    
                return res.status(200).json({ adminAcces: false, login: true });
    
            }
        }
    } catch {
        console.log("fontionne pas :/")
        return res.status(501).json({ adminAcces: false, login: false });
    }

    console.log("fontionne pas :///")
    return res.status(501).json({ adminAcces: false, login: false });
});




app.post("/checkAdmin", async (req, res) => {

    const tokenAdmin = req.body.tokenAdmin;

    jwt.verify(tokenAdmin, process.env.SECRET_KEY_TOKEN_ADMIN, (err, decoded) => {
        if (err) {
            return res.status(500).json({ adminAcces: false, login: true });
        }

        return res.json({ adminAcces: true });
    });


});

app.post("/checkUser", async (req, res) => {
    
    const tokenUser = req.body.tokenUser;

    //recupere cookie user:


    jwt.verify(tokenUser, process.env.SECRET_KEY_TOKEN_USER, (err, decoded) => {
        if (err) {
            return res.status(500).json({ userAcces: false, login: true });
        }

        return res.json({ userAcces: true });
    });

});




//api pour la base de donnée

const username = encodeURIComponent("louvbg");
const password = encodeURIComponent("<password>");
const cluster = "<clusterName>";
const authSource = "<authSource>";
const authMechanism = "<authMechanism>";


/*
app.get('/api/database', async (req, res) => {
    const database = client.db("databaseUsers");
    const ratings = database.collection("sales");
    const cursor = ratings.find();
    const data = await cursor.toArray();
    res.json(data);
});
*/

app.post('/api/addAccount', async (req, res) => {

    let credentials = req.body.credentials;

    console.log("credentials : ")
    console.log(credentials)


    const userDatabase = await UserDatabase.findOne({ email: credentials.email });
    if (userDatabase) {
        console.log("email deja utilisé");
        return res.status(400).json({ message: 'Email already used' });
    }

    const newUser = new UserDatabase({
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        years: credentials.years,
        email: credentials.email,
        password: await bcrypt.hash(credentials.password, 10),

    });
    try {
        const savedUser = await newUser.save();
        console.log("Account added : " + savedUser);
        return res.status(201).json({ message: 'Account added' });
    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ message: 'Failed to add account' });
    }

      
});



app.post('/api/user', async (req, res) => {

    const tokenUser = req.body.tokenUser;

    if (tokenUser === undefined) {
        console.log("No token provided :/");
        return res.status(401).json({ message: 'No token provided' });
    }

    
    return res.status(200).json({ user: await getUserInfo(tokenUser)});
 

});




//const fs = require('fs');


const upload = multer({ dest: 'src/api/uploads/' }); // Stocke temporairement le fichier


app.post('/api/addProfilePicture', upload.single('profileImage'),  (req, res) => {



    //const image = req.body.image;
    console.log(req.file);  // Affiche ce qui est dans req.file

    if (!req.file) {
        console.log("Aucun fichier téléchargé.");
        return res.status(400).send('No file uploaded.');
    }

    const filePath = path.join(__dirname, 'uploads', req.file.filename);
    console.log(filePath)

    // Lire le fichier et le convertir en binaire
    fs.readFile(filePath, async (err, data) => {
        if (err) {
            console.log("....triste....")
            return res.status(500).json({ error: 'Failed to read file' });
        }




        const cookie = req.cookies['tokenUser'];
        let user = await getUserInfo(cookie);

        const base64Data = Buffer.from(data).toString('base64');

        console.log("base64Dataaaaaaaaaaaaaaaaaaaaaaa : ")
        console.log(base64Data)
        
        const filter = { email: user.email };
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                profilePicture: base64Data
            },
        };


        const result = await UserDatabase.updateOne(filter, updateDoc, options);


        console.log("okok ca fontionne :!mmmmmm")
        console.log(result);

        // Vous pouvez maintenant enregistrer "data" dans MongoDB
        // Exemple : const imageBinary = data;

        // Supprimer le fichier temporaire après traitement
        // fs.unlink(filePath, (err) => {
        //     if (err) console.error('Failed to delete temporary file');
        // });

        console.log("okok ca fontionne :! !!!!!!")
        console.log(data);

        return res.status(200).json({ imageData: base64Data});
    });


});
