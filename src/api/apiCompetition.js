
const express = require('express');
const port = 5000;

const corp = require('cors');
const app = express();
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
    console.log("sendEmail 11 ");
    console.log(req);
    console.log(req.query.text);
    sendEmailT(req.query.text);
    res.send('Email envoyé');
});

