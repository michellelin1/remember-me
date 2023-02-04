const http = require('http');
const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);



// async function sendScheduledSms() {
//   // schedule message to be sent 61 minutes after current time
//   const sendWhen = new Date(new Date().getTime() + 16 * 60000);

//   // send the SMS
//   const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
//   const message = await client.messages.create({
//     from: messagingServiceSid,
//     to: '5103659900',  // ← your phone number here
//     body: 'testing 2',
//     scheduleType: 'fixed',
//     sendAt: sendWhen.toISOString(),
//   });

//   console.log(message.sid);
// }

// sendScheduledSms();
