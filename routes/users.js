const router = require("express").Router();
const userController = require("../controllers/users.js");

router.post('/', userController.createUser);
router.post('/', userController.login);
router.post('/', userController.getUsersData);
router.post('/', userController.changePassword);
router.post('/', userController.deleteUser);
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})

module.exports = router;