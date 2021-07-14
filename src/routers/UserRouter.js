const router = require('express').Router();
const { listUsers, createUser } = require('../controllers/UserController');

router.get('/users', listUsers);
router.get('/users/create', createUser);

module.exports = router;
