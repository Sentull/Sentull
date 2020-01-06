var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'almaa.auliaputri@gmail.com',
    pass: 'illumi123'
  }
});

var mailOptions = {
  from: 'barca2952@gmail.com',
  to: 'ahmadsalim.alifiansyah@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Hati-Hati</h1><p>Gagah Sebenarnya</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});