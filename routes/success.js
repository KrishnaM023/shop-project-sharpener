const path = require('path');
const express = require('express');

const successController = require('../controllers/products')

const router = express.Router();

router.get('/contact-success', successController.getContactSuccess);

module.exports = router;