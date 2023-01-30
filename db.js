const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/NewDevelopers`, (err) => {
    if (!err){
        console.log("connected to mongoDB");
    } else {
        console.log("error in connecting to mongo")
    }
});