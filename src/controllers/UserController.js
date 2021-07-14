const listUsers = (req, resp) => {
  resp.send('Listar usuarios');
};

const viewCreateUser = (req, resp) => {
  resp.render('user/createUser');
};

const createUser = (req, resp) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
};

module.exports = {
  listUsers,
  viewCreateUser,
  createUser,
};
