const router = require('express').Router();
const { listArticles, listArticleId, listArticlesCategory } = require('../controllers/indexControllers');

router.get('/', listArticles);
router.get('/:slug', listArticleId);
router.get('/category/:id', listArticlesCategory);

module.exports = router;
