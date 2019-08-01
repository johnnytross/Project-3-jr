const router = require('express').Router();
const bookRoutes = require('./books');
const userRoute = require('../../controllers/users');
const authRoute = require('../../controllers/auth');

// Book routes
router.use('/books', bookRoutes);
router.use('/users', userRoute);
router.use('/auth', authRoute);
module.exports = router;
