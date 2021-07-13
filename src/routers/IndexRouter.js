const router = require('express').Router();
const { listArticles } = require('../controllers/indexControllers');

router.get('/', listArticles);

module.exports = router;
