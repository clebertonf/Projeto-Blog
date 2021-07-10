const slugify = require('slugify');
const connection = require('./connection');

const addCategorieBank = async (title) => {
  try {
    const slugTitle = slugify(title);
    const query = 'INSERT INTO blog.tb_categories (title, slug) VALUES (?, ?)';
    const response = await connection.execute(query, [title, slugTitle]);
    return response;
  } catch (err) {
    console.error(err);
  }
};

const findCategorieBank = async (title) => {
  const query = `SELECT * FROM blog.tb_categories WHERE title LIKE '%${title}%'`;
  const [response] = await connection.execute(query, [title]);
  return response;
};

module.exports = {
  addCategorieBank,
  findCategorieBank,
};
