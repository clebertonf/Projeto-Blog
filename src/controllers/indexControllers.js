const ArticlesModel = require('../models/IndexModel');

const listArticles = async (_req, resp) => {
  const response = await ArticlesModel.listArticleBank();
  if (response.length >= 1) return resp.render('index', { response });
  resp.render('index', { response });
};

module.exports = {
  listArticles,
};
