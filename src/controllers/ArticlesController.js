const CategoriesModel = require('../models/CategoriesModel');

const renderViewAddArticle = async (req, resp) => {
    const response = await CategoriesModel.listCategoriesBank();
    resp.render('articles/newArticle', { response })
}

module.exports = {
    renderViewAddArticle,
}