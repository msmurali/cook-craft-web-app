import { Client } from 'pg';
import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY, 
  domain: process.env.MAILGUN_DOMAIN,
});

const client = new Client({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const result = await client.query('SELECT email FROM subscribers');
      await client.end();

      const emails = result.rows.map((row) => row.email);

      const emailData = {
        from: 'Excited User <mailgun@sandbox703cc3df5a4f4a96a76d65b67b9edc4a.mailgun.org>',
        to: emails.join(','),
        subject: 'Weekly Newsletter',
        text: 'Here is your weekly newsletter!',
      };

      mg.messages().send(emailData, (error, body) => {
        if (error) {
          return res.status(500).json({ error: 'Error sending newsletter' });
        }
        res.status(200).json({ message: 'Newsletter sent successfully', body });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong, try again later' });
    }
  } else {
    res.status(405).json({ error: 'Technical Error, try again later' });
  }
}
