import { Client } from "pg";

const client = new Client({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Invalid or empty email" });
    }

    try {
      await client.connect();
      await client.query("INSERT INTO subscribers (email) VALUES ($1)", [
        email,
      ]);
      await client.end();
      res.status(200).json({ message: "Subscribed to weekly news-letter" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong, try again later" });
    }
  } else {
    res.status(405).json({ error: "Technical Error, try again later" });
  }
}
