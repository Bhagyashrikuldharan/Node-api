var express = require('express');
var router = express.Router();
var developer = require('./developerModel')

/* GET users listing. */
router.post('/insert', function(req, res, ) {
   console.log(req.body)
    const NewDeveloper = new developer(req.body);
    NewDeveloper.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"successful Registerd"})
        }
    })
});

router.delete('/delete/:id', function(req, res, ) {
   const { id } = req.params;
   developer.findOneAndDelete({ id }, function (err , data){
       if(err){
           res.status(500).json({ status:false, message: err.toString()});
       }else{
            res.status(200).json({ status:true, message: "User deleted successfully"});
       }
   })
});

module.exports = router;
