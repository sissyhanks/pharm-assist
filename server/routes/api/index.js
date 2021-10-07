const router = require('express').Router();
const userRoutes = require('./user-routes');
const medlistRoutes = require('./medlist-routes');

router.use('/users', userRoutes);

module.exports = router;
