const express = require('express')
const router = express.Router()
 
const jobPostDataController = require('./jobPostDataController')
const jobPosterDataController = require('./jobPosterDataController')
const companyDataController = require('./companyDataController')
const apiController = requre('./apiController')
 
//Job Post Routes
router.get('/api/post', jobPostDataController.index, apiController.index)
router.delete('/api/post/:id', jobPostDataController.destroy, apiController.show)
router.put('/api/post/:id', jobPostDataController.update, apiController.show)
router.post('/api/post', jobPostDataController.create, apiController.show)
router.get('/api/post/:id', jobPostDataController.show, apiController.show)
 
//Job Poster Routes
router.get('/api/poster', jobPosterDataController.index, apiController.index)
router.delete('/api/poster/:id', jobPosterDataController.destroy, apiController.show)
router.put('/api/poster/:id', jobPosterDataController.update, apiController.show)
router.post('/api/poster', jobPosterDataController.create, apiController.show)
router.get('/api/poster/:id', jobPosterDataController.show, apiController.show)
 
//Company route
router.get('/api/company', companyDataController.index, apiController.index)
router.delete('/api/company/:id', companyDataController.destroy, apiController.show)
router.put('/api/company/:id', companyDataController.update, apiController.show)
router.post('/api/company', companyDataController.create, apiController.show)
router.get('/api/company/:id', companyDataController.show, apiController.show)
 
 
module.exports = router
 