const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//     to: 'dpthynair@gmail.com',
//     from: 'dpthynair@gmail.com',
//     subject: 'Sending with SendGrid ',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and Easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail.send(msg);

const sendWelcomeEmail = (email,name) => {

    sgMail.send({
        to: email,
        from: 'dpthynair@gmail.com',
        subject: 'Thanks for joining in !',
        text: `Welcome to the app, ${name}.Let me know how you get along with the app.`
    })
}

const sendCancellationEmail = (email,name) => {
    sgMail.send({
        to: email,
    from: 'dpthynair@gmail.com',
    subject:'Sorry to see you go',
    text: `Goodbye ${name}. Is there anything we could have done to have kept you onboard? Hope to see you back sometime soon`
    })

}
  console.log('Email sent')


  module.exports = {
    sendWelcomeEmail ,
    sendCancellationEmail
  }