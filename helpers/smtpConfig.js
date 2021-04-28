var smtpTransport = require("nodemailer-smtp-transport");
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: "",
        pass: "",
      },
    })
);

module.exports = transporter;