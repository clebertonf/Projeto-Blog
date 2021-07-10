const router = require('express').Router();

router.get('/', (req, resp) => resp.render('index'));

module.exports = router;
