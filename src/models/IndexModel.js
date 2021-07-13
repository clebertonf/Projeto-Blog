const connection = require('./connection');

const listArticleBank = async () => {
  const query = 'SELECT * FROM blog.tb_article';
  const [response] = await connection.execute(query);
  return response;
};

const listArticleIDBank = async (slug) => {
  const query = 'SELECT * FROM blog.tb_article where slug = ?';
  const [response] = await connection.execute(query, [slug]);
  return response;
};

module.exports = {
  listArticleBank,
  listArticleIDBank,
};
