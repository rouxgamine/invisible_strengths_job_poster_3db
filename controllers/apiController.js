//Company api

const apiCompany = {
    index (req, res, next) {
      res.json(res.locals.data.company)
    },
    show (req, res, next) {
      res.json(res.locals.data.company)
    },
    create (req, res, next) {
      res.json(res.locals.data.company)
    },
    update (req, res, next) {
      res.json(res.locals.data.company)
    },
    destroy (req, res, next) {
      res.json(res.locals.data.company)
    }
  }

  //Job Poster api
  
  const apiJobPoster = {
    index (req, res, next) {
      res.json(res.locals.data.jobPoster)
    },
    show (req, res, next) {
      res.json(res.locals.data.jobPoster)
    },
    create (req, res, next) {
      res.json(res.locals.data.jobPoster)
    },
    update (req, res, next) {
      res.json(res.locals.data.jobPoster)
    },
    destroy (req, res, next) {
      res.json(res.locals.data.jobPoster)
    }
  }

  //Job Post api 

  const apiJobPost = {
    index (req, res, next) {
      res.json(res.locals.data.jobPost)
    },
    show (req, res, next) {
      res.json(res.locals.data.jobPost)
    },
    create (req, res, next) {
      res.json(res.locals.data.jobPost)
    },
    update (req, res, next) {
      res.json(res.locals.data.jobPost)
    },
    destroy (req, res, next) {
      res.json(res.locals.data.jobPost)
    }
  }
  
  module.exports = {
    apiJobPost,
    apiJobPoster,
    apiCompany
  }
