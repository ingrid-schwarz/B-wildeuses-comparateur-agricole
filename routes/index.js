const router = require('express').Router();

const acheteursRoutes = require('./acheteurs.routes');
const agriculteursRoutes = require('./agriculteurs.routes');
const citiesRoutes = require('./cities.routes')
const produitsRoutes = require('./produits.routes');
const transactionsRoutes = require('./transactions.routes');



router.use('/acheteurs', acheteursRoutes);
router.use('/agriculteurs', agriculteursRoutes);
router.use('/cities', citiesRoutes);
router.use('/produits', produitsRoutes);
router.use('/transactions', transactionsRoutes);

module.exports = router;