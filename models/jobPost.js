const mongoose = require('mongoose')

const jobPostSchema = new mongoose.Schema({
    company:{type: mongoose.Schema.Types.ObjectId, ref:'Company' },
    jobPoster:{type: mongoose.Schema.Types.ObjectId, ref:'JobPoster'},
    positionTitle:{type: String, required: true},
    salaryRange:{type: String, required: true},
    linkedIn:{type: String, required: true},
    qualification:{type: String, required: true},
    accomodations:{type: String, 
        enum:[
            'Auditory Aids',
            'Speech Aids',
            'Vision Aids', 
            'Transportation Assistance',
            'Physical Accessibility',
            'Flexible Management Policies',
            'Cognitive Aids',
            'Behavioral Aids',
            'Other'
        ],
        required: true
    },
    deadline:{type:Date, required: true},
    datePosted:{type:Date, required:true},
    applicationLink:{type:String, required:true},
    location:{type:String, required: true},
    jobType:{type:String, required: true},
    experienceLevel:{type:String, required:true},
    benefits:{type:String, required:true},
    onsiteOrRemote:{type:String,enum:['onsite','remote']} 

})

const JobPost = mongoose.model('JobPost', jobPostSchema)
module.exports = JobPost