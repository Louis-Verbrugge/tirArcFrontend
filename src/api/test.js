const brevo = require("@getbrevo/brevo");

// Configure the API key
const apiKey = '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';

// Create an instance of the TransactionalEmailsApi class with the API key configuration
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

// Function to send an email

module.exports = {
    sendEmailT: function(name) {
        try {
            // Create a new SendSmtpEmail object
            const smtpEmail = new brevo.SendSmtpEmail();
            smtpEmail.subject = "Test Email";
            smtpEmail.to = [{ email: "louvbg@gmail.com", name: "Louis" }];
            smtpEmail.htmlContent = `<html><body><h1>Hello Louis! 22 22 45567 88 </h1><br><h2>${name}</h2></body></html>`;
            smtpEmail.sender = { name: "Inscription Tir a l'arc", email: "tirarc506@outlook.com" };

            // Send the email using the API
            const response = apiInstance.sendTransacEmail(smtpEmail);
            console.log('Email sent successfully:', response.body);
        } catch (error) {
            console.error('Error occurred:', error.response ? error.response.body : error.message);
        }
    }
}

