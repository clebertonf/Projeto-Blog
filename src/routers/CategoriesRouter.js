const router = require('express').Router();

router.get('/categories/new', (req, resp) => resp.render('categories/newCategorie'));

module.exports = router;
