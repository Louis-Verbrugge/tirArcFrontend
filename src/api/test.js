const brevo = require("@getbrevo/brevo");

// Configure the API key
const apiKey = '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';

// Create an instance of the TransactionalEmailsApi class with the API key configuration
const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey);

// Function to send an email
async function sendEmailT() {
    try {
        // Create a new SendSmtpEmail object
        const smtpEmail = new brevo.SendSmtpEmail();
        smtpEmail.subject = "Test Email";
        smtpEmail.to = [{ email: "tirarc506@outlook.com", name: "Louis" }];
        smtpEmail.htmlContent = '<html><body><h1>Hello Louis!</h1></body></html>';
        smtpEmail.sender = { name: "Mar", email: "louvbg@gmail.com" };

        // Send the email using the API
        const response = await apiInstance.sendTransacEmail(smtpEmail);
        console.log('Email sent successfully:', response.body);
    } catch (error) {
        console.error('Error occurred:', error.response ? error.response.body : error.message);
    }
}

// Call the function to send the email
sendEmailT();
