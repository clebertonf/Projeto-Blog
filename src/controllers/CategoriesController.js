const CategoriesModel = require('../models/CategoriesModel');

const renderViewAddCategorie = (_req, resp) => {
  const error = exists = sucess = false;
  resp.render('categories/newCategorie', { error, exists, sucess });
};

const addCategorieBank = async (req, resp) => {
  let error = 'Aconteceu algo de errado ao cadastrar sua Categoria!';
  let exists = 'Sua categoria ja existe';
  let sucess = 'Cadastrado com sucesso!';

  const { title } = req.body;
  const findCategorieExists = await CategoriesModel.findCategorieBank(title);

  if (findCategorieExists.length >= 1) {
    sucess = error = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
    return;
  }

  const response = await CategoriesModel.addCategorieBank(title);
  if (response) {
    error = exists = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
  } else {
    sucess = exists = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
  }
};

module.exports = {
  renderViewAddCategorie,
  addCategorieBank,
};
