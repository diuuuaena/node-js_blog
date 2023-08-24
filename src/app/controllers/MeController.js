const Course = require('../models/Course');

class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res, next){

        Promise.all([Course.find({}).lean(), Course.countWithDeleted({deleted:true})])
            .then(([courses, deletedCourses]) => {
                res.render('me/store-courses', {
                    deletedCourses,
                    courses,
                });
            })
            .catch(next);

    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next){
        Course.findWithDeleted( {deleted:true} ).lean()
            .then((courses) =>{
                res.render('me/trash-courses', { courses });
            })
            .catch(next);
    }

}

module.exports = new MeController();
