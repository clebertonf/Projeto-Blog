const router = require('express').Router();
const IndexRouter = require('./IndexRouter');
const CategorieRouter = require('./CategoriesRouter');

router.use('/', IndexRouter);
router.use('/admin', CategorieRouter);

module.exports = router;
