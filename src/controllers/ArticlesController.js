const CategoriesModel = require('../models/CategoriesModel');
const ArticlesModel = require('../models/ArticlesModel');

const renderViewAddArticle = async (req, resp) => {
    const response = await CategoriesModel.listCategoriesBank();
    resp.render('articles/newArticle', { response })
}

const createArticle = async (req, resp) => {
    const { title, article, id_categorie } = req.body;
    const response = await ArticlesModel.addArticleBank(title, article, id_categorie);
    if(response) resp.redirect('/');
}

const listArticles = async (_req, resp) => {
    const response = await ArticlesModel.listArticleBank();
    if (response.length >=1 ) return resp.render('articles/listArticles',{ response });
    resp.redirect('/articles/list');
}

module.exports = {
    renderViewAddArticle,
    createArticle,
    listArticles
}