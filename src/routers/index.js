const router = require('express').Router();
const IndexRouter = require('./IndexRouter');
const CategorieRouter = require('./CategoriesRouter');
const ArticlesRouter = require('./ArticlesRouter');


router.use('/', IndexRouter);
router.use('/admin', CategorieRouter);
router.use('/admin', ArticlesRouter);

module.exports = router;
