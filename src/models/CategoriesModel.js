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
  try {
    const query = `SELECT * FROM blog.tb_categories WHERE title LIKE '%${title}%'`;
    const [response] = await connection.execute(query, [title]);
    return response;
    
  } catch (err) {
    console.error(err)
  }
};

const listCategoriesBank =  async () => {
 try {
   const query = 'SELECT * FROM blog.tb_categories';
   const [response] = await connection.execute(query);
   return response;
 } catch (err) {
   console.error(err)
 }
}

const deleteCategorieBank = async (id) => {
  try {
    const query = 'DELETE FROM blog.tb_categories WHERE id_categories = ?';
    const response = connection.execute(query, [id]);
    return response;
    
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  addCategorieBank,
  findCategorieBank,
  listCategoriesBank,
  deleteCategorieBank
};
