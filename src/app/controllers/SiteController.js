const Course = require('../models/Course');

class SiteController {
    //[GET] /news
    async home(req, res, next) {
        Course.find({}).lean()
            .then(courses => {
                res.render('home', { courses });
            })
            .catch(error => next(error));
        //res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
