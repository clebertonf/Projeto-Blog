const router = require('express').Router();

const { renderViewAddCategorie, addCategorieBank } = require('../controllers/CategoriesController');

router.get('/categories/new', renderViewAddCategorie);
router.post('/categories/save', addCategorieBank);

module.exports = router;
