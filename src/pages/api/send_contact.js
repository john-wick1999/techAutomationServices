import { ServerClient } from 'postmark';
import twilio from 'twilio';
import { phoneRecipients, emailRecipients } from '../../config/recipients';

const postmarkClient = new ServerClient(process.env.POSTMARK_SERVER_TOKEN);
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default async (req, res) => {
  console.log("We've been called yey");
  if (req.method === 'POST') {
    console.log('We are in the post method');
    try {
      const { name, email, subject, message } = req.body;

      // Prepare the email content
      const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

      // Send email to each recipient
      console.log('Sending email to recipients')
      for (const recipient of emailRecipients) {
        console.log('Sending email to recipient', recipient)
        await postmarkClient.sendEmail({
          From: process.env.POSTMARK_SENDER_ADDRESS,
          To: recipient,
          Subject: subject,
          TextBody: emailBody,
        });
      }

      // Send SMS to each recipient. Still can't uncomment it because have to verify the phone number
      // console.log('Sending SMS to recipients')
      // for (const number of phoneRecipients) {
      //   console.log('Sending SMS to number', number)
      //   await twilioClient.messages.create({
      //     body: `New message from ${name}: ${message}`,
      //     from: process.env.TWILIO_PHONE_NUMBER,
      //     to: number,
      //   });
      // }

      //lets wait for 4 seconds to simulate a long running process
      // testing for the loading animation etc
      // await new Promise((resolve) => setTimeout(resolve, 4000));

      res.status(200).json({ message: 'Emails and SMS sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending messages', details: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
