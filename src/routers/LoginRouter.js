const router = require('express').Router();
const { renderViewLogin } = require('../controllers/LoginController');

router.get('/login', renderViewLogin);
module.exports = router;
