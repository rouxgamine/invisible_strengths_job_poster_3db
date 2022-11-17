const Company = require('../models/company')

const companyDataController = {
  // Index,
  index(req, res, next) {
    Company.find({}, (err, foundCompanies) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.companies = foundCompanies
        next()
      }
    })
  },
  // Destroy
  destroy(req, res, next) {
    Company.findByIdAndDelete(req.params.id, (err, deletedCompany) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.company = deletedCompany
        next()
      }
    })
  },
  // Update
  update(req, res, next) {
    Company.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedCompany) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.company = updatedCompany
        next()
      }
    })
  },
  // Create
  create(req, res, next) {
    Company.create(req.body, (err, createdCompany) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.company = createdCompany
        next()
      }
    })
  },
  // Show
  show(req, res, next) {
    Company.findById(req.params.id, (err, foundCompany) => {
        if (err) {
          res.status(404).send({
            msg: err.message,
            output: 'Could not find a company with that ID'
          })
        } else {
          res.locals.data.company = foundCompany
          next()
        }
      })
    }
}

module.exports = companyDataController
