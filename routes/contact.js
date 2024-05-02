const path = require('path')
const express = require('express');

const contactController = require('../controllers/products');

const router = express.Router();

router.get('/contact-us', contactController.getContactUs);

router.post('/contact-us', contactController.postContactUS);

module.exports = router;