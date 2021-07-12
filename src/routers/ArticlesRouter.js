const router = require('express').Router();
const { renderViewAddArticle } = require('../controllers/ArticlesController');

router.get('/articles/new', renderViewAddArticle);

module.exports = router;