const CategoriesModel = require('../models/CategoriesModel');

const renderViewAddCategorie = (_req, resp) => {
  const error = false;
  const exists = false;
  const sucess = false;
  resp.render('categories/newCategorie', { error, exists, sucess });
};

const addCategorieBank = async (req, resp) => {
  let error = 'Aconteceu algo de errado ao cadastrar sua Categoria!';
  let exists = 'Sua categoria ja existe';
  let sucess = 'Cadastrado com sucesso!';

  const { title } = req.body;
  const findCategorieExists = await CategoriesModel.findCategorieBank(title);

  if (findCategorieExists.length >= 1) {
    sucess = false;
    error = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
    return;
  }

  const response = await CategoriesModel.addCategorieBank(title);
  if (response) {
    error = false;
    exists = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
  } else {
    sucess = false;
    exists = false;
    resp.render('categories/newCategorie', { error, exists, sucess });
  }
};

module.exports = {
  renderViewAddCategorie,
  addCategorieBank,
};
