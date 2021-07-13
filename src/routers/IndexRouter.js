const router = require('express').Router();
const { listArticles, listPostId } = require('../controllers/indexControllers');

router.get('/', listArticles);
router.get('/:slug', listPostId);

module.exports = router;
