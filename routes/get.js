const express = require('express');
const router = express.Router();
const Feeds = require('../api/getFeeds'); 
router
.get('/feeds', new Feeds().getTwitterEntities)
module.exports = router;