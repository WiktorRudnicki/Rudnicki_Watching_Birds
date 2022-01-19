const express = require('express');
const { getBirds } = require('../controllers/funk.js');

const router = express.router();

router.get('/birds', getBirds);

module.exports = router;
