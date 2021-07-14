const connection = require('./connection');

const listArticleBank = async () => {
  const query = 'SELECT * FROM blog.tb_article ORDER BY id_article DESC';
  const [response] = await connection.execute(query);
  return response;
};

const listArticleIDBank = async (slug) => {
  const query = 'SELECT * FROM blog.tb_article where slug = ?';
  const [response] = await connection.execute(query, [slug]);
  return response;
};

const listArticlesByCategoryBank = async (id) => {
  const query = 'SELECT b.title, b.slug, b.article, b.preview, b.created_at, a.title as title_categorie FROM blog.tb_categorie as a INNER JOIN blog.tb_article as b USING(id_categorie) WHERE a.id_categorie = ?';
  const [response] = await connection.execute(query, [id]);
  return response;
};

module.exports = {
  listArticleBank,
  listArticleIDBank,
  listArticlesByCategoryBank,
};
