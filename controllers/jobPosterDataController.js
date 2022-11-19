const JobPoster = require('../models/jobposter')

const jobPosterDataController = {
  // Index,
  index(req, res, next) {
    JobPoster.find({username: req.session.username}, (err, foundJobPosters) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPosters = foundJobPosters
        next()
      }
    })
  },
  // Destroy
  destroy(req, res, next) {
    JobPoster.findByIdAndDelete(req.params.id, (err, deletedJobPoster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPoster = deletedJobPoster
        next()
      }
    })
  },
  // Update
  update(req, res, next) {
    JobPoster.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedJobPoster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPoster = updatedJobPoster
        next()
      }
    })
  },
  // Create
  create(req, res, next) {
    req.body.username = req.session.username
    JobPoster.create(req.body, (err, createdJobPoster) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.jobPoster = createdJobPoster
        next()
      }
    })
  },
  // Show
  show(req, res, next) {
    JobPoster.findById(req.params.id, (err, foundJobPoster) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find a jobPoster with that ID'
          })
        } else {
          res.locals.data.jobPoster = foundJobPoster
          next()
        }
      })
    }
}

module.exports = jobPosterDataController
