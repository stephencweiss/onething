('use strict')
const nodemailer = require('nodemailer')
const smtpConfig = require('./smtp-config')

const ENV = process.env.NODE_ENV || 'dev'
// this file will be run on a schedule

// it will retrieve the schedules from the database that should be sent in the period
// (for example, if we run it every hour, retrieve all schedules that should be run in the next hour)
// TODO:
// 1. write the query to retrieve the data
// 2. create a schedule endpoint that i can hit to _get_ the schedule <- this would be an internal end point
// Question: since it's internal, how do i protect it beyond making it "hidden"

// take the returned values from the

const users = [
  { name: 'stephen', email: 'stephen@example.com' },
  { name: 'brandon', email: 'brandon@example.com' },
]


// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount()

    const generateTemplate = async ({name, email}) => {


        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport(smtpConfig[ENV])

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Fred Foo 👻" <foo@example.com>`, // sender address
            to: `${name}, ${email}`, // list of receivers
            subject: 'Hello ✔', // Subject line
            text: 'Hello world?', // plain text body
            html: `<b>Hello ${name}</b>`, // html body
        })

        console.log('Message sent: %s', info.messageId)
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    users.forEach(user => generateTemplate(user))
}

main().catch(console.error)
