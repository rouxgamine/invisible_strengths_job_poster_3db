const JobPost = require('../models/jobpost')

const jobPostDataController = {
  // Index,
  index(req, res, next) {
    JobPost.find({}, (err, foundJobPosts) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPosts = foundJobPosts
        next()
      }
    })
  },
  // Destroy
  destroy(req, res, next) {
    JobPost.findByIdAndDelete(req.params.id, (err, deletedJobPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPost = deletedJobPost
        next()
      }
    })
  },
  // Update
  update(req, res, next) {
    JobPost.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedJobPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPost = updatedJobPost
        next()
      }
    })
  },
  // Create
  create(req, res, next) {
    JobPost.create(req.body, (err, createdJobPost) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPost = createdJobPost
        next()
      }
    })
  },
  // Show
  show(req, res, next) {
    JobPost.findById(req.params.id, (err, foundJobPost) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find a jobPost with that ID'
          })
        } else {
          res.locals.data.jobPost = foundJobPost
          next()
        }
      })
    }
}

module.exports = jobPostDataController
