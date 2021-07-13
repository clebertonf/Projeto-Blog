const connection = require('./connection');

const listArticleBank = async () => {
  const query = 'SELECT * FROM blog.tb_article';
  const [response] = await connection.execute(query);
  return response;
};

module.exports = {
  listArticleBank,
};
