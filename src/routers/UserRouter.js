const router = require('express').Router();
const { listUsers, viewCreateUser, createUser } = require('../controllers/UserController');

router.get('/list/users', listUsers);
router.get('/users/create', viewCreateUser);
router.post('/users/new', createUser);

module.exports = router;
