const router = require('express').Router();
const IndexRouter = require('./IndexRouter');
const CategorieRouter = require('./CategoriesRouter');
const ArticlesRouter = require('./ArticlesRouter');
const UserRouter = require('./UserRouter');
const LoginRouter = require('./LoginRouter');

router.use('/', IndexRouter);
router.use('/admin', LoginRouter);
router.use('/admin', UserRouter);
router.use('/admin', CategorieRouter);
router.use('/admin', ArticlesRouter);

module.exports = router;
