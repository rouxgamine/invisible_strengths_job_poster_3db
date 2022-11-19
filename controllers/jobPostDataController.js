const JobPost = require('../models/jobpost')
const Company = require('../models/company')

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
  async destroy(req, res, next) {
    // JobPost.findByIdAndDelete(req.params.id, (err, deletedJobPost) => {
    //   if (err) {
    //     res.status(400).send({
    //       msg: err.message
    //     })
    //   } else {
    //     res.locals.data.jobPost = deletedJobPost
    //     next()
    //   }
    // })
    try {
      const deletedJobPost = await JobPost.findByIdAndDelete(req.params.id)
      await Company.findByIdAndUpdate(deletedJobPost.company, {
        $pull: {
          JobPost: req.params.id
        }
      })
      res.status(200).json(deletedJobPost)
    } catch (error) {
      console.log(error)
    }
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
    async create(req, res, next) {
  // JobPost.create(req.body, (err, createdJobPost) => {
  //   if (err) {
  //     res.status(400).send({
  //       msg: err.message
  //     })
  //   } else {
  //     res.locals.data.jobPost = createdJobPost
  //     next()
  //   }
  // })
  try {
    const newJobPost = await JobPost.create(req.body)
    await Company.findByIdAndUpdate(newJobPost.company, {
      $push: {
        JobPost: newJobPost._id
      }
    })
    res.status(200).json(newJobPost)
  } catch (error) {
    console.log(error)
  }
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
