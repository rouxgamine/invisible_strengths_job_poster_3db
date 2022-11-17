console.log('hello')

const apiControllerCompany = {
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
  
  module.exports = apiControllerCompany