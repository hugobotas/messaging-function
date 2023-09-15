const functions= require('@google-cloud/functions-framework');
const nodeMailer = require("nodemailer");

function sendEmail(attributes) {
    const transporter = nodeMailer.createTransport({
        host: "smtp.freesmtpservers.com",
        port: 25,
        secure: false
    });
    const mailOptions = {
        from: "hugobotas@teste.com",
        to: attributes.to,
        bcc: "",
        subject: attributes.subject,
        text: attributes.text
    };
    transporter
        .sendMail(mailOptions)
        .then(() => console.log("Sent"))
        .catch(e => console.log("Error"));
}

functions.cloudEvent('helloCloudEvents', (cloudevent) => {
    switch (cloudevent.data.message.type.toLowerCase()) {
        case 'email':
            sendEmail(cloudevent.data.message.attributes)
            break
        default:
            console.log("Log error")
    }
});