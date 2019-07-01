const express = require('express');
const router = express.Router(); 
const expressJwt = require('express-jwt'); 
router
.get('/feeds', require('../api/getFeeds'))
module.exports = router;