const slugify = require('slugify');
const connection = require('./connection');

const addArticleBank = async (title, article, id_categorie) => {
    const slugifyTitle = slugify(title);
    const query = 'INSERT INTO blog.tb_article (title, article, slug, id_categorie) VALUES (?, ?, ?, ?)';
    const response = await connection.execute(query, [title, article, slugifyTitle, id_categorie]);
    return response;
};

const listArticleBank = async () => {
    const query = 'SELECT b.id_article, b.title, b.slug, a.title as title_categorie FROM tb_categorie as a INNER JOIN tb_article as b USING(id_categorie)';
    const [response] = await connection.execute(query);
    return response;
};

module.exports = {
    addArticleBank,
    listArticleBank
}