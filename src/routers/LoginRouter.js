const router = require('express').Router();
const { renderViewLogin, userAuthentication } = require('../controllers/LoginController');

router.get('/login', renderViewLogin);
router.get('/authentication', userAuthentication);

module.exports = router;
