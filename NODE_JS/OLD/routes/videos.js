const express = require('express');
const router = express.Router();
const { getAllVideos, uploadVideo } = require('../controllers/videoController');

router.get('/', getAllVideos);
router.post('/', uploadVideo);

module.exports = router;
