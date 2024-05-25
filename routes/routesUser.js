const { Router } = require('express');
const { register_User, login_User, logout_User } = require('../controllers/controllerUser');

const router = Router();

router.post('/register', register_User);
router.post('/login', login_User);
router.post('/logout', logout_User);

module.exports = router;
