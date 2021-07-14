const connection = require('./connection');

const createNewUserBank = async (name, email, hash) => {
  try {
    const query = 'INSERT INTO blog.tb_user (name, email, password) VALUES (?, ?, ?)';
    const response = await connection.execute(query, [name, email, hash]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const verifyUserBank = async (email) => {
  try {
    const query = 'SELECT * FROM blog.tb_user WHERE email = ?';
    const [response] = await connection.execute(query, [email]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const listUsersBank = async () => {
  try {
    const query = 'SELECT * FROM blog.tb_user';
    const [response] = await connection.execute(query);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const deleteUserBank = async (id) => {
  try {
    const query = 'DELETE FROM blog.tb_user WHERE id_user = ?';
    const response = await connection.execute(query, [id]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createNewUserBank,
  verifyUserBank,
  listUsersBank,
  deleteUserBank,
};
