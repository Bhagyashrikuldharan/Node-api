const mongoose = require('mongoose');
let DeveloperSchema = mongoose.Schema({
    id:{
        type: Number,
        required:[true, 'Id is required'] 
    },
    name:{
        type: String,
        required:[true, 'Name is required']
    },
    city:{
        type: String,
        required:[true, 'city is required'] 
    },
    skills:{
        type: String,
        required:[true, 'skills are required'] 
    }
    
});
    
module.exports = mongoose.model('NewDeveloper', DeveloperSchema)