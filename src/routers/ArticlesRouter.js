const router = require('express').Router();
const { renderViewAddArticle, createArticle } = require('../controllers/ArticlesController');

router.get('/articles/new', renderViewAddArticle);
router.post('/articles/save', createArticle);


module.exports = router;