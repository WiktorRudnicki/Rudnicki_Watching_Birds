const express = require('express');
const { getBirds, deleteBird } = require('../model/model.js');

const router = express.Router();

router.get('/birds', getBirds);
router.delete('/birds/:birdId', deleteBird);

module.exports = router;
