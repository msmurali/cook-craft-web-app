const axios = require("axios");

module.exports = async (req, res) => {
  const { query } = req;
  const apiKey = process.env.NEWS_API_KEY;
  console.log(query, apiKey)
  const endpoint = 'https://newsapi.org/v2/everything'

  try {
    const response = await axios.get(endpoint, { apiKey, ...query });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({
      message: "Error fetching data from News API",
      error: error.message,
    });
  }
};
