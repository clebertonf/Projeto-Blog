const ArticlesModel = require('../models/IndexModel');
const CategoriesModel = require('../models/CategoriesModel');

const listArticles = async (_req, resp) => {
  const categories = await CategoriesModel.listCategoriesBank();
  const response = await ArticlesModel.listArticleBank();
  if (response.length >= 1) return resp.render('index', { response, categories });
  resp.render('index', { response, categories });
};

const listArticleId = async (req, resp) => {
  const { slug } = req.params;
  const categories = await CategoriesModel.listCategoriesBank();
  const response = await ArticlesModel.listArticleIDBank(slug);
  const article = response[0];
  if (response.length >= 1) return resp.render('articles/articleId', { article, categories });
};

const listArticlesCategory = async (req, resp) => {
  const { id } = req.params;
  const categories = await CategoriesModel.listCategoriesBank();
  const articles = await ArticlesModel.listArticlesByCategoryBank(id);
  if (articles.length >= 1) return resp.render('articles/articlesByCategorie', { articles, categories });
  return resp.render('articles/notFound', { articles, categories });
};

const listArticlesNum = async (req, resp) => {
  const { num } = req.params;
  const categories = await CategoriesModel.listCategoriesBank();
  const response = await ArticlesModel.listArticlesNumBank(num);

  if (response.length > 1) return resp.render('articles/pageArticles', { response, categories });
  return resp.render('articles/notFound', { response, categories });
};

module.exports = {
  listArticles,
  listArticleId,
  listArticlesCategory,
  listArticlesNum,
};
