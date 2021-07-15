const renderViewLogin = (req, resp) => {
  resp.render('user/login');
};

const userAuthentication = (req, resp) => {

};

module.exports = {
  renderViewLogin,
  userAuthentication,
};
