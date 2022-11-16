const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    CompanyName: {type: String, required: true}, 
    CompanyWebsite:{type: String, require: true},
    AboutCompany: {type: String, require: true}, 
    JobPoster: [{type: mongoose.Schema.Types.ObjectId, ref: 'JobPoster'}], 
    JobPost: [{type: mongoose.Schema.Types.ObjectId, ref:'JobPost'}]
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company