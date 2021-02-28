/* GET list-display page. */
const movieListDisplay = function (req, res, next) {
    res.render('list-display', {
        title: 'Movie List',
        movieList :[{
            name: "Tenet",
            genres:["Action", "Science Fiction", "Suspense"],
            cardImage:"/images/tenet.jpg",
            upcoming:false
        },        
        {
            name: "Wonder Woman",
            genres:["Action", "Adventure", "Fantasy"],
            cardImage:"/images/wonder-woman.jpg",
            upcoming:false
        },
        {
            name: "Godzilla Vs. Kong",
            genres: ["Action", "Fantasy", "Thriller"],
            cardImage:"/images/godzillaVsKong.jpg",
            upcoming:true
        },
        {
            name: "Black Adam",
            genres: ["Action", "Sci-Fi"],
            cardImage:"/images/blackAdam.jpg",
            upcoming:true
        }]

    });
};


module.exports = {
    movieListDisplay
}