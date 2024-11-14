const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController');

router.post('/post-rating', ratingController.guardarValoracion);

router.get('/get-rating', ratingController.obtenerValoraciones);

module.exports = router;
