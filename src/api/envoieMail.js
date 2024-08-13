
/*
require('dotenv').config();

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3',
    },
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

module.exports = {
    sendMail: function(data) {
        console.log("sendMail 22 " + data);
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: "louvbg@gmail.com",
            subject: "test",
            text: data
        };
        
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log("E-mail envoyé" + info);
            }
        });
    }
};
*/


const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainTextPassword = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjM1NjQ4NDQsImV4cCI6MTcyNDE2OTY0NH0.LuHREO2B2cI-g3v-RGGInOait5ct55gRV8xAQicnAfw';

bcrypt.hash(plainTextPassword, saltRounds, function(err, hash) {
    // Stockez ce hash dans process.env.ADMIN_PASSWORD
    console.log(hash);
});

