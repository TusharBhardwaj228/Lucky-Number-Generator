const express = require('express');
const router = express.Router();
const {login, dashboard} = require('../controllers/main.js');
const authMiddleWare = require('../middleware/auth.js');

router.route('/login').post(login);
router.route('/dashboard').get(authMiddleWare,dashboard);

module.exports = router;