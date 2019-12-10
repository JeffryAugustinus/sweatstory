const router = require('express').Router();
const {
  create,
  index,
  show,
  destroy,
  edit
} = require('../controllers/postController.js');
const authenticate = require('../middlewares/authenticate.js');

router.post('/', authenticate, create);
router.get('/', index);
router.get('/:_id', show);
router.delete('/:_id', authenticate, destroy);
router.post('/:_id', authenticate, edit);
module.exports = router;
