const router = require('express').Router();
const { renderViewAddArticle, createArticle, listArticles } = require('../controllers/ArticlesController');

router.get('/articles/new', renderViewAddArticle);
router.post('/articles/save', createArticle);
router.get('/articles/list', listArticles);



module.exports = router;