///Did you get my hello?!


const express = require('express')
const router = express.Router()
 
const jobPostDataController = require('./jobPostDataController')
const jobPosterDataController = require('./jobPosterDataController')
const companyDataController = require('./companyDataController')
const apiController = requre('./apiController')
 
//Job Post Routes
router.get('/post', jobPostDataController.index, apiController.index)
router.delete('/post/:id', jobPostDataController.destroy, apiController.show)
router.put('/post/:id', jobPostDataController.update, apiController.show)
router.post('/post', jobPostDataController.create, apiController.show)
router.get('/post/:id', jobPostDataController.show, apiController.show)
 
//Job Poster Routes
router.get('/poster', jobPosterDataController.index, apiController.index)
router.delete('/poster/:id', jobPosterDataController.destroy, apiController.show)
router.put('/poster/:id', jobPosterDataController.update, apiController.show)
router.post('/poster', jobPosterDataController.create, apiController.show)
router.get('/poster/:id', jobPosterDataController.show, apiController.show)
 
//Company route
router.get('/company', companyDataController.index, apiController.index)
router.delete('/company/:id', companyDataController.destroy, apiController.show)
router.put('/company/:id', companyDataController.update, apiController.show)
router.post('/company', companyDataController.create, apiController.show)
router.get('/company/:id', companyDataController.show, apiController.show)
 
 
module.exports = router
 