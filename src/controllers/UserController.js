const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

const listUsers = (req, resp) => {
  resp.send('Listar usuarios');
};

const viewCreateUser = (req, resp) => {
  const error = false;
  resp.render('user/createUser', { error });
};

const createUser = async (req, resp) => {
  const { name, email, password } = req.body;
  const error = 'Email informado ja existe';

  const userExists = await UserModel.verifyUserBank(email);
  if (userExists.length >= 1) return resp.render('user/createUser', { error });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const response = await UserModel.createNewUserBank(name, email, hash);
  if (response) resp.redirect('/');
};

module.exports = {
  listUsers,
  viewCreateUser,
  createUser,
};
