const mongoose = require('mongoose')

const jobPostSchema = new mongoose.Schema({
    company:{type:ObjectId , ref:'Company' },
    jobPoster:{type:ObjectId,ref:'JobPost'},
    positionTitle:{type: String, require: true},
    salaryRange:{type: String, require: true},
    linkedIn:{type: String, require: true},
    qualification:{type: String, require: true},
    accomodations:{type: String, 
        ernum:[
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
        require: true
    },
    deadline:{type:Date, require: true},
    dateposted:{type:Date, require:true},
    applicationLink:{type:String, require:true},
    location:{type:String, require: true},
    jobType:{type:String, require: true},
    expirienceLevel:{type:String, require:true},
    benefits:{type:String, require:true},
    onsiteOrRemote:{type:String,enume:['onsite','remote']} 

})

const JobPost = mongoose.model('JobPost', jobPostSchema)
module.exports = JobPost