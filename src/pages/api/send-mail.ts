import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
    secure: true,
  });
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_USERNAME,
    to: process.env.NEXT_PUBLIC_MAIL_RECEIVER,
    subject:
      req.body.subject + " " + req.body.firstname + " " + req.body.lastname,
    text: req.body.message + " mail address : " + req.body.email,
  };
  transporter.sendMail(mailOptions, function (error: any, info: any) {
    console.log(mailOptions)
    if (error) {
      res.status(301).json({ name: "Email not sending!", error });
    } else {
      res.status(200).json({ name: "Email sent!" });
    }
  });
}
