const { Client } = require('pg');
const mailgun = require('mailgun-js');


const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});


const client = new Client({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await client.connect();
      const result = await client.query('SELECT email FROM subscribers');
      await client.end();

      const emails = result.rows.map((row) => row.email);

      const emailData = {
        from: 'Excited User <newsletter@yourdomain.com>', 
        to: emails.join(','), 
        subject: 'Weekly Newsletter',
        text: 'Here is your weekly newsletter',
      };

      const mailResponse = await mg.messages().send(emailData);
      
      return res.status(200).json({ message: 'Newsletter sent successfully', mailResponse });

    } catch (error) {
      console.error('Error occurred:', error);
      return res.status(500).json({ error: 'Something went wrong, try again later' });
    }
  } else {

    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};
