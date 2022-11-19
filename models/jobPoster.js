const mongoose = require('mongoose')

const jobPosterSchema = new mongoose.Schema({
    User_ID: {type: String, required: true}, 
    Password:{type: String, required: true},
    JobPosterTitle: {type: String, required: true}, 
    JobPost: [{type: mongoose.Schema.Types.ObjectId, ref: 'JobPost'}], 
    Company: {type: mongoose.Schema.Types.ObjectId, ref:'Company'}
})

const JobPoster = mongoose.model('JobPoster', jobPosterSchema)

module.exports = JobPoster