const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY,
});

const newsApiProxy = "https://cook-craft-web-app.vercel.app/api/news-api-proxy";

const pool = new Pool({
  connectionString: process.env.POSTGRES_CONNECTION_STRING,
});

const generateHtmlContent = (articles) => {
  const htmlPath = path.join(__dirname, "email-template.html");
  let htmlContent = fs.readFileSync(htmlPath, "utf8");

  const articlesHtmlContent = articles
    ?.map(
      (article) => `
        <div class="article" onclick="window.open('${article?.url}', '_blank')">
            <div class="article-thumbnail">
                <img src="${article?.urlToImage}" alt="article-thumbnail">
            </div>
            <div class="article-content">
                <h1 class="poppins-medium">${article?.title}</h1>
                <p class="poppins-regular">${article?.description}</p>
            </div>
        </div>
    `
    )
    .join("");

  htmlContent = htmlContent.replace("{{dynamicContent}}", articlesHtmlContent);
  return htmlContent;
};

module.exports = async function handler(req, res) {
  if (req.method === "POST") {
    let client;
    try {
      client = await pool.connect();
      const result = await client.query("SELECT email FROM subscribers");
      const emails = result.rows.map((row) => row.email);
      console.log(emails);

      const newsArticlesResponse = await fetch(newsApiProxy);
      const newsArticlesJson = await newsArticlesResponse.json();
      const articles = newsArticlesJson?.articles || [];

      if (articles && articles?.length) {
        const htmlContent = generateHtmlContent(articles);
        console.log(htmlContent)
        const emailData = {
          from: "CookCraft <mailgun@sandbox703cc3df5a4f4a96a76d65b67b9edc4a.mailgun.org>",
          to: emails,
          subject: "Cook Craft",
          text: "Weekly News Letter",
          html: htmlContent,
        };

        const mailResponse = await mg.messages.create(
          process.env.MAILGUN_DOMAIN,
          emailData
        );

        return res
          .status(200)
          .json({ message: "Newsletter sent successfully", mailResponse });
      } else {
        console.log("Failed to fetch articles");
        throw new Error("Failed to fetch articles");
      }
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
