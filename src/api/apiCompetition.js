
require('dotenv').config();


const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const corp = require('cors');
const jwt = require('jsonwebtoken');


const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(corp());



app.listen(port, () => { console.log(`Server is running on port ${port}`) });

const supabase = require('@supabase/supabase-js');

const db = supabase.createClient(
    'https://umkpmqvmgiqsapyhmswu.supabase.co', 
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVta3BtcXZtZ2lxc2FweWhtc3d1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTk1MTI5NSwiZXhwIjoyMDM1NTI3Mjk1fQ.PNerNj1sQAcJZDb4zDkZKFhMenxP-sieFb_fYsulpkA'
);


//api renvoi les competitions entre 2 dates
app.get('/api/competition', async (req, res) => {
    const { startDate, endDate } = req.query;
    console.log(req.query);
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
    console.log(req.query);
    const { data, error } = await db
        .from('Competition')
        .select("*")
        .gte('dateEvent', startDate)
        .lte('dateEvent', endDate);


    console.log(data + '         -(----------fdffdikjfidj,iokfoki,fdsonkofjnkd');
    const listeCity = data.map((item) => item.lieu);
    const listeCityDinct = [...new Set(listeCity)]

    res.json(listeCityDinct);
});




// api pour envoyer un mail:
const { sendEmailT } = require('./test');

app.post('/sendEmail/', async (req, res) => {
    sendEmailT(req.query.firstName, req.query.lastName, req.query.age, req.query.email);
    res.send('Email envoyé');
});


// check login admin:
app.post('/loginAdmin', async (req, res) => {
    const receivedStruct = req.body.credentials;
    
    if (receivedStruct.login === process.env.ADMIN_USER && await bcrypt.compare(receivedStruct.password, process.env.ADMIN_PASSWORD)) {
        
        jwt.sign({ isAdmin: true }, process.env.SECRET_KEY_TOKEN_ADMIN, { expiresIn: '3650d' }, (err, token) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to generate token' });
            }
            console.log("s")
            console.log(token)
            console.log("e")

            res.json({ isAdmin: token });

        });

    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    };
});


//check if admin
app.post("/checkAdmin", (req, res) => {

    const tokenAdmin = req.body.tokenAdmin;
    console.log(tokenAdmin)

    jwt.verify(tokenAdmin, process.env.SECRET_KEY_TOKEN_ADMIN, (err, decoded) => {
        if (err) {
            console.log("erreur")
            return res.status(500).json({ adminAcces: false });
        }
        console.log("okok top !")

        res.json({ adminAcces: true });
    });


});
