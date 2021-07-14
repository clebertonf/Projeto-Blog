const listUsers = (req, resp) => {
  resp.send('Listar usuarios');
};

const createUser = (req, resp) => {
  resp.render('user/createUser');
};

module.exports = {
  listUsers,
  createUser,
};
