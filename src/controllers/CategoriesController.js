const renderViewAddCategorie = (_req, resp) => {
  resp.render('categories/newCategorie');
};

const addCategorieBank = (req, resp) => {
  const { title } = req.body;
  console.log(title);
};

module.exports = {
  renderViewAddCategorie,
  addCategorieBank,
};
