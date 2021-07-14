const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

const viewCreateUser = (req, resp) => {
  const error = false;
  resp.render('user/createUser', { error });
};

const createUser = async (req, resp) => {
  const { name, email, password } = req.body;
  let error = 'Email informado ja existe';

  const userExists = await UserModel.verifyUserBank(email);
  if (userExists.length >= 1) return resp.render('user/createUser', { error });

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const response = await UserModel.createNewUserBank(name, email, hash);
  if (response) {
    error = false;
    return resp.redirect('/admin/list/users');
  }
};

const listUsers = async (req, resp) => {
  const response = await UserModel.listUsersBank();

  if (response) return resp.render('user/listUsers', { response });
};

module.exports = {
  listUsers,
  viewCreateUser,
  createUser,
};
