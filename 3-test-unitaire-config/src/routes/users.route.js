const express = require('express');
const router = express.Router();
const users = require('../controllers/users.controller');

router.get('/users', users.getAll);
router.get('/user/:id',users.getCurrentUser);
router.post('/registration', users.create);
router.put('/setting/update/:id', users.update);
router.delete('/setting/delete/:id',users.delete);

module.exports = router;