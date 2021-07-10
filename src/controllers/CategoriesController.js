const CategoriesModel = require('../models/CategoriesModel');

const renderViewAddCategorie = (_req, resp) => {
  resp.render('categories/newCategorie');
};

const addCategorieBank = async (req, resp) => {
  const { title } = req.body;
  const response = await CategoriesModel.addCategorieBank(title);
  if (response) resp.redirect('/admin/categories/new');
};

module.exports = {
  renderViewAddCategorie,
  addCategorieBank,
};
