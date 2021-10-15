const router = require('express').Router();
const {
  getSingleUser,
  saveMed,
  deleteMed,
  login,
  register,
  logout,
  loggedin
} = require('../../controllers/user-controller');
const { authMiddleware } = require('../../utils/auth');

// http://localhost:3001/api/users

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/loggedin').get(loggedin);
router.route('/getSingleUser').get(authMiddleware, getSingleUser);
router.route('/saveMed').post(authMiddleware, saveMed);
router.route('/deleteMed').get(authMiddleware, deleteMed);


module.exports = router;

// import middleware
// const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware, saveMed);

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/medicine/:medicineName').delete(authMiddleware, deleteMed);


