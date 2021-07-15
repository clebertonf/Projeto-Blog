const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');

const renderViewLogin = (req, resp) => {
  const error = false;
  resp.render('user/login', { error });
};

const userAuthentication = async (req, resp) => {
  const { email, password } = req.body;
  let error = false;
  const [user] = await UserModel.verifyUserBank(email);

  if (!user) {
    error = 'Usuario não encontrado!';
    return resp.render('user/login', { error });
  }

  const { password: passwordBank, id_user: idUser, email: emailUser } = user;

  const validPasswordOld = bcrypt.compareSync(password, passwordBank);
  if (validPasswordOld) {
    req.session.user = {
      idUser,
      emailUser,
    };
    return resp.redirect('/admin/articles/list');
  }
  error = 'Senha Incorreta!';
  return resp.render('user/login', { error });
};

const userLogout = (req, resp) => {
  req.session.destroy();
  return resp.redirect('/admin/login');
};

module.exports = {
  renderViewLogin,
  userAuthentication,
  userLogout,
};
