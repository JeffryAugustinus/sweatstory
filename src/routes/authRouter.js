const router = require('express').Router();
const {
  register,
  login,
  whoAmI,
  findall
} = require('../controllers/usersController.js');
const authenticate = require('../middlewares/authenticate.js');

router.post('/register', register);
router.post('/login', login);
router.get('/whoAmI', authenticate, whoAmI);
router.get('/findall', findall);

module.exports = router;
