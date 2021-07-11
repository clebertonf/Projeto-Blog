const router = require('express').Router();

const { renderViewAddCategorie, addCategorieBank, listCategories } = require('../controllers/CategoriesController');

router.get('/categories/new', renderViewAddCategorie);
router.post('/categories/save', addCategorieBank);
router.get('/categories/list', listCategories);


module.exports = router;
