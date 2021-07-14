const router = require('express').Router();
const {
  listUsers, viewCreateUser, createUser, deleteUser, searchUser,
} = require('../controllers/UserController');

router.get('/list/users', listUsers);
router.get('/users/create', viewCreateUser);
router.post('/users/new', createUser);
router.post('/users/delete', deleteUser);
router.get('/users/search/:id', searchUser);

module.exports = router;
