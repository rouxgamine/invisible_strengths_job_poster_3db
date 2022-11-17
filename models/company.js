const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    CompanyName: {type: String, required: true}, 
    CompanyWebsite:{type: String, required: true},
    AboutCompany: {type: String, required: true}, 
    JobPoster: [{type: mongoose.Schema.Types.ObjectId, ref: 'JobPoster'}], 
    JobPost: [{type: mongoose.Schema.Types.ObjectId, ref:'JobPost'}]
})

const Company = mongoose.model('Company', companySchema)


module.exports = Company