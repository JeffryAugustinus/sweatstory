const router = require('express').Router();
const authenticate = require('../middlewares/authenticate.js');
const {
  index,
  show,
  destroy,
  create,
  edit
} = require('../controllers/postController.js');

router.get('/', authenticate, index);
router.get('/posts/:_id', authenticate, show);
router.get('/destroy/:_id', authenticate, destroy);
router.get('/create', authenticate, create);
router.get('/edit/:_id', authenticate, edit);

module.exports = router;
