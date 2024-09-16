const axios = require("axios");

module.exports = async (req, res) => {
  const { query } = req;
  const apiKey = process.env.NEWS_API_KEY;
  console.error(apiKey)
  const endpoint = `https://newsapi.org/v2/everything?q=recipe&searchIn=title&sortBy=relevancy&pageSize=10&page=${query?.page}&apiKey=${apiKey}}`

  try {
    const response = await axios.get(endpoint);

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({
      message: "Error fetching data from News API",
      error: error.message,
    });
  }
};
