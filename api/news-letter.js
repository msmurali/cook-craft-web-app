const { Pool } = require("pg");
const mailgun = require("mailgun-js");

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  host: 'api.eu.mailgun.net',
});

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

module.exports = async function handler(req, res) {
  console.log("Mailgun API Key: ", process.env.MAILGUN_API_KEY);
  console.log("Mailgun Domain: ", process.env.MAILGUN_DOMAIN);

  if (req.method === "POST") {
    let client;
    try {
      client = await pool.connect();
      const result = await client.query("SELECT email FROM subscribers");

      const emails = result.rows.map((row) => row.email);

      const emailData = {
        from: "Excited User <sandbox703cc3df5a4f4a96a76d65b67b9edc4a.mailgun.org>",
        to: emails.join(","),
        subject: "Weekly Newsletter",
        text: "Here is your weekly newsletter",
      };

      const mailResponse = await mg.messages().send(emailData);

      return res
        .status(200)
        .json({ message: "Newsletter sent successfully", mailResponse });
    } catch (error) {
      console.error("Error occurred:", error);
      return res
        .status(500)
        .json({ error: "Something went wrong, try again later" });
    } finally {
      if (client) client.release(); // Release the client back to the pool
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};
