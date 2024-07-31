const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async function (email, title, body) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 2525,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    let info = await transporter.sendMail({
      from: "Skill Boost Team",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });
    console.log("Info from sending mail ", info);
    return info;
  } catch (error) {
    console.log("Error occurred while sending mail ", error);
    throw error;
  }
};

module.exports = mailSender;
