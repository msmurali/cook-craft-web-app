const { Pool } = require('pg');
const formData = require('form-data'); // Required by mailgun.js
const Mailgun = require('mailgun.js'); // New mailgun SDK
const mailgun = new Mailgun(formData);

// Initialize the Mailgun client with your API key and domain
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY, // Use your Mailgun API key here
  url: 'https://api.mailgun.net' // Use 'https://api.eu.mailgun.net' for EU region
});

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

module.exports = async function handler(req, res) {
  if (req.method === 'POST') {
    let client;
    try {
      // Connect to PostgreSQL and fetch email addresses from the subscribers table
      client = await pool.connect();
      const result = await client.query('SELECT email FROM subscribers');
      const emails = result.rows.map((row) => row.email);

      // Define the email data to send
      const emailData = {
        from: 'Excited User <mailgun@sandbox703cc3df5a4f4a96a76d65b67b9edc4a.mailgun.org>', // Update as needed
        to: emails, // Pass the array directly
        subject: 'Weekly Newsletter',
        text: 'Here is your weekly newsletter',
        html: '<p>Here is your weekly newsletter</p>' // Add HTML version if needed
      };

      // Send email using Mailgun
      const mailResponse = await mg.messages.create(process.env.MAILGUN_DOMAIN, emailData);
      
      return res.status(200).json({ message: 'Newsletter sent successfully', mailResponse });

    } catch (error) {
      console.error('Error occurred:', error);
      return res.status(500).json({ error: 'Something went wrong, try again later' });
    } finally {
      if (client) client.release(); // Release the client back to the pool
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};
