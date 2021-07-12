const router = require('express').Router();
const { renderViewAddArticle, createArticle, listArticles, deleteArticle } = require('../controllers/ArticlesController');

router.get('/articles/new', renderViewAddArticle);
router.post('/articles/save', createArticle);
router.get('/articles/list', listArticles);
router.post('/articles/delete', deleteArticle);


module.exports = router;
