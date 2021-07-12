const ArticlesModel = require('../models/ArticlesModel');

const listArticles = async (req, resp) => {
    const response = await ArticlesModel.listArticleBank();
    if (response.length >=1 ) return resp.render('index',{ response });
    resp.redirect('/');
};

module.exports = {
    listArticles,
}