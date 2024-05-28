const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || '72b55bf1c426aa89314c20a9326bf9a8-a2dd40a3-de7a0a2c'});

mg.messages.create('sandbox-123.mailgun.org', {
	from: "Team <consamate57@gmail.com>",
	to: ["consamate57@gmail.com"],
	subject: "Your Maintenance is Due",
	text: "Your Scheduled maintenance is here. It's time to take action to protect your system!",
	html: "<h1>Your Scheduled maintenance is here. It's time to take action to protect your system!</h1>"
})
.then(msg => console.log(msg)) // logs response data
.catch(err => console.log(err)); // logs any error
