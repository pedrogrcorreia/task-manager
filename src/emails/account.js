const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pedrogrcorreia@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. I hope you enjoy it!`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pedrogrcorreia@gmail.com',
        subject: 'Why are you cancelling?',
        text: `I heard you are abandoning us ${name}! What could've we dont to keep you with us?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

