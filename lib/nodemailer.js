"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
export default async function main(receiver, subject, text) {


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAI_HOST,
    port: process.env.EMAI_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAI_USER, 
      pass: process.env.EMAI_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: receiver, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return nodemailer.getTestMessageUrl(info);
}
