const express = require('express')
const router = express.Router()
 
const jobPostDataController = require('./jobPostDataController')
const jobPosterDataController = require('./jobPosterDataController')
const companyDataController = require('./companyDataController')
const apiController = require('./apiController')

router.use((req, res, next) => {
    if (req.session.loggedIn) {
        next()
    } else {
        res.redirect("/user/login")
    }
})

//Job Post Routes
router.get('/api/post', jobPostDataController.index, apiController.apiJobPost.index)
router.delete('/api/post/:id', jobPostDataController.destroy, apiController.apiJobPost.show)
router.put('/api/post/:id', jobPostDataController.update, apiController.apiJobPost.show)
router.post('/api/post', jobPostDataController.create, apiController.apiJobPost.show)
router.get('/api/post/:id', jobPostDataController.show, apiController.apiJobPost.show)
 
//Job Poster Routes
router.get('/api/poster', jobPosterDataController.index, apiController.apiJobPoster.index)
router.delete('/api/poster/:id', jobPosterDataController.destroy, apiController.apiJobPoster.show)
router.put('/api/poster/:id', jobPosterDataController.update, apiController.apiJobPoster.show)
router.post('/api/poster', jobPosterDataController.create, apiController.apiJobPoster.show)
router.get('/api/poster/:id', jobPosterDataController.show, apiController.apiJobPoster.show)
 
//Company route
router.get('/api/company', companyDataController.index, apiController.apiCompany.index)
router.delete('/api/company/:id', companyDataController.destroy, apiController.apiCompany.show)
router.put('/api/company/:id', companyDataController.update, apiController.apiCompany.show)
router.post('/api/company', companyDataController.create, apiController.apiCompany.show)
router.get('/api/company/:id', companyDataController.show, apiController.apiCompany.show)
 
 
module.exports = router
 