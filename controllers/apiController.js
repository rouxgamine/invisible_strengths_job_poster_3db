//Company api

const apiCompany = {
    index (req, res, next) {
      res.json(res.locals.data.companies)
    },
    show (req, res, next) {
      res.json(res.locals.data.company)
    }
  }

  //Job Poster api
  
  const apiJobPoster = {
    index (req, res, next) {
      res.json(res.locals.data.jobPosters)
    },
    show (req, res, next) {
      res.json(res.locals.data.jobPoster)
    }
  }

  //Job Post api 

  const apiJobPost = {
    index (req, res, next) {
      res.json(res.locals.data.jobPosts)
    },
    show (req, res, next) {
      res.json(res.locals.data.jobPost)
    }
  }
  
  module.exports = {
    apiJobPost,
    apiJobPoster,
    apiCompany
  }
