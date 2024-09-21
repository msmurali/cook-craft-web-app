import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});


export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Invalid or empty email" });
    }

    try {
      const client = await pool.connect();
      await client.query("DELETE FROM subscribers email WHERE email = $1", [
        email,
      ]);
      await client.release();
      res.status(200).json({ message: "Unsubscribed to weekly news-letter" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong, try again later" });
    }
  } else {
    res.status(405).json({ error: "Technical Error, try again later" });
  }
}