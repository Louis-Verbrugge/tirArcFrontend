

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
