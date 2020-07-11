const router = require('express').Router();
const userRoutes = require('./user-routes');
// const postRoute = require('./post');

router.use('/users', userRoutes);

module.exports = router;
