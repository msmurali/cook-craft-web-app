const axios = require("axios");
const config = require('../src/configs/api.config.ts');

module.exports = async (req, res) => {
  const { query } = req;
  const apiKey = process.env.NEWS_API_KEY;
  const endpoint = config.apiConfig.newsApi.urls.getRecipeBlogsUrl();

  try {
    const response = await axios.get(endpoint, { apiKey, ...query });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({
      message: "Error fetching data from News API",
      error: error.message,
    });
  }
};
