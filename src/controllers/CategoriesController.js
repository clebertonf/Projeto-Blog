const CategoriesModel = require('../models/CategoriesModel');

const renderViewAddCategorie = (_req, resp) => {
  const error = false;
  resp.render('categories/newCategorie', { error });
};

const addCategorieBank = async (req, resp) => {
  const { title } = req.body;
  const error = 'Aconteceu algo de errado ao cadastrar sua Categoria!';
  const response = await CategoriesModel.addCategorieBank(title);
  if (response) {
    resp.redirect('/admin/categories/new');
  } else {
    resp.render('categories/newCategorie', { error });
  }
};

module.exports = {
  renderViewAddCategorie,
  addCategorieBank,
};
