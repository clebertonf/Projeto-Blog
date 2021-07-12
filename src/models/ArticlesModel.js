const slugify = require('slugify');
const connection = require('./connection');

const addArticleBank = async (title, article, id_categorie) => {
    const slugifyTitle = slugify(title);
    const query = 'INSERT INTO blog.tb_article (title, article, slug, id_categorie) VALUES (?, ?, ?, ?)';
    const response = await connection.execute(query, [title, article, slugifyTitle, id_categorie]);
    return response;
};

module.exports = {
    addArticleBank,
}