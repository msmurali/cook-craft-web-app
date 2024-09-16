const { Pool } = require("pg");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.mailgun.net", // Use 'https://api.eu.mailgun.net' for EU region
});

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

module.exports = async function handler(req, res) {
  if (req.method === "POST") {
    let client;
    try {
      client = await pool.connect();
      const result = await client.query("SELECT email FROM subscribers");
      const emails = result.rows.map((row) => row.email);

      const emailData = {
        from: "Excited User <mailgun@sandbox703cc3df5a4f4a96a76d65b67b9edc4a.mailgun.org>", 
        to: emails, 
        subject: "Weekly Newsletter",
        text: "Here is your weekly newsletter",
        html: "<p>Here is your weekly newsletter</p>", 
      };

      const mailResponse = await mg.messages.create(
        process.env.MAILGUN_DOMAIN,
        emailData
      );

      return res
        .status(200)
        .json({ message: "Newsletter sent successfully", mailResponse });
    } catch (error) {
      console.error("Error occurred:", error);
      return res
        .status(500)
        .json({ error: "Something went wrong, try again later" });
    } finally {
      if (client) client.release();
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};
