const ArticlesModel = require('../models/IndexModel');

const listArticles = async (_req, resp) => {
  const response = await ArticlesModel.listArticleBank();
  if (response.length >= 1) return resp.render('index', { response });
  resp.render('index', { response });
};

const listPostId = async (req, resp) => {
  const { slug } = req.params;
  const response = await ArticlesModel.listArticleIDBank(slug);
  const article = response[0];
  if (response.length >= 1) return resp.render('articles/articleId', { article });
};

module.exports = {
  listArticles,
  listPostId,
};
