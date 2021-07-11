const router = require('express').Router();

const { renderViewAddCategorie, addCategorieBank,
     listCategories, deleteCategorie } = require('../controllers/CategoriesController');

router.get('/categories/new', renderViewAddCategorie);
router.post('/categories/save', addCategorieBank);
router.get('/categories/list', listCategories);
router.post('/categories/delete', deleteCategorie);



module.exports = router;
