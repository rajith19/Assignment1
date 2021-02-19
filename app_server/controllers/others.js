/* GET home page. */
const index = function (req, res, next) {
    res.render('index', { title: 'WE ARE MOVIE BUFFS' });
};

/* GET display page. */
const display = function (req, res, next) {
    res.render('display', { title: 'Display page' });
};


module.exports = {
    index,
    display,
}

