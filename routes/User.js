const router = require('express').Router();
const controller = require('../controllers');

router.post('/register', controller.User.registerNewUser);
router.get('/', controller.User.getAll);
router.get('/:id', controller.User.getByID);
router.post('/:id', controller.User.update);
router.delete('/:id', controller.User.deleteUser);

module.exports = router;