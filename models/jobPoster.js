const mongoose = require('mongoose')

const jobPosterSchema = new mongoose.Schema({
    User_ID: {type: mongoose.Schema.Types.ObjectId, ref:'User'}, 
    JobPosterTitle: {type: String, required: true}, 
    JobPost: [{type: mongoose.Schema.Types.ObjectId, ref: 'JobPost'}], 
    Company: [{type: mongoose.Schema.Types.ObjectId, ref:'Company'}],
})

const JobPoster = mongoose.model('JobPoster', jobPosterSchema)

module.exports = JobPoster