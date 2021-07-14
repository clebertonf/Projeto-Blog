const router = require('express').Router();
const {
  listUsers, viewCreateUser, createUser, deleteUser,
} = require('../controllers/UserController');

router.get('/list/users', listUsers);
router.get('/users/create', viewCreateUser);
router.post('/users/new', createUser);
router.post('/users/delete', deleteUser);

module.exports = router;
