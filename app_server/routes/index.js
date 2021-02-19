var express = require('express');
var router = express.Router();
const ctrlOther = require('../controllers/others');
const ctrlAbout = require('../controllers/about');
const ctrlMovieList = require('../controllers/movieList');


router.get('/', ctrlOther.index);
router.get('/about', ctrlAbout.about);
router.get('/list', ctrlMovieList.movieListDisplay);
router.get('/display', ctrlOther.display);

module.exports = router;
