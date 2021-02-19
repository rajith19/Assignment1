/* GET list-display page. */
const movieListDisplay = function (req, res, next) {
    res.render('list-display', {
        title: 'Movie List',
        movieList :[{
            name: "Tenet",
            genres:["Action", "Science Fiction", "Suspense"],
            img:"/images/tenet.jpg",
            upcoming:false
        },        
        {
            name: "Wonder Woman",
            genres:["Action", "Adventure", "Fantasy"],
            img:"/images/wonder-woman.jpg",
            upcoming:false
        },
        {
            name: "Godzilla Vs. Kong",
            genres: ["Action", "Fantasy", "Thriller"],
            img:"/images/godzillaVsKong.jpg",
            upcoming:true
        },
        {
            name: "Black Adam",
            genres: ["Action", "Sci-Fi"],
            img:"/images/blackAdam.jpg",
            upcoming:true
        }]

    });
};


module.exports = {
    movieListDisplay
}