const router = require('express').Router();
const { getSingleUser,} = require('../../controllers/user-controller');

router.route('/profile').get(getSingleUser);

module.exports = router;
