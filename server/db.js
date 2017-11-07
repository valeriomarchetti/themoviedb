var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', 
    { useMongoClient: true }, 
    function(err){
        if (err)
            console.log(err);
        else 
            console.log("connesso al db");
    }
);