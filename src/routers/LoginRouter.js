const router = require('express').Router();
const { renderViewLogin, userAuthentication } = require('../controllers/LoginController');

router.get('/login', renderViewLogin);
router.post('/authentication', userAuthentication);

module.exports = router;
