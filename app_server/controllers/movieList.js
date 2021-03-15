const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

/* GET list-display page. */
const movieListDisplay = function (req, res, next) {

    res.render('list-display', {
        title: 'Movie List',
        movieList: next

    });
};


const movielist = function (req, res) {
    const path = '/api/movies';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            movieListDisplay(req, res, body)
        }
    );
};


const _renderDetailPage = function (req, res, responseBody) {
    console.log("responseBody", responseBody);
    res.render('details', {
        currentMovie: responseBody
    });
};

const movieInfo = function (req, res) {
    const path = `/api/movies/${req.params.movieid}`
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    );
};

const _renderCreatePage = function (req, res) {
    res.render('create', {
        title: "Create New Movie"
    })
}

const addNewMovie = function (req, res) {
    _renderCreatePage(req, res);
}

const doAddNewMovie = function (req, res) {
    // console.log("ap_seve", req.body)
    const path = '/api/movies';
    const postdata = {
        name: req.body.name,
        cardImage: req.body.cardImage,
        genres: req.body.genres,
        upcoming: req.body.upcoming,
        price: req.body.price,
        author : req.body.author,
        rating : req.body.rating,
        reviewText : req.body.reviewText,
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if (response.statusCode === 201) {
                res.redirect('/list');
            }
        }
    );
};




module.exports = {
    movielist,
    movieInfo,
    addNewMovie,
    doAddNewMovie,
}