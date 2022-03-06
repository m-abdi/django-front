"use strict";
const nodemailer = require("nodemailer");
// <a href=${process.env.NEXT_PUBLIC_URL}${link}><button style="display: block;inline-size: 150px; font-size: 25pt; margin-left: auto;margin-right: auto; background-color: rgb(52, 52, 175); color: white; border-radius: 20px; padding: 20px; ">Verify</button></a>
// async..await is not allowed in global scope, must use a wrapper
export default async function main(receiver, subject, firstName, link) {
  const verificationHTML = `<div style="padding: 70px;">
Hello ${firstName} <br><br>

You registered an account on botland, before being able to use your account you need to verify that this is your
email address by clicking here:<br><br><br>
<div cursor:pointer;color:blue;text-decoration:underline;>${process.env.NEXT_PUBLIC_URL}${link}<div><br><br>
Kind Regards, botland
</div>`;
  // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASSWORD,
  //   },
  // });
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Botalnd " <support@botland.com>', // sender address
    to: receiver, // list of receivers
    subject: subject, // Subject line
    html: verificationHTML, // html body
  });

  return info;
}
