const express = require('express');
const router = express.Router();
const controller = require("../controllers/controllers")

/* GET home page. */
router.get('/', controller.products);

module.exports = router;
