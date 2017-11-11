var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost:27017/test', 
mongoose.connect('mongodb://dbuser:dbpwd@ds255455.mlab.com:55455/themoviesdb', 
    { useMongoClient: true }, 
    function(err){
        if (err)
            console.log(err);
        else 
            console.log("connesso al db");
    }
);
mongoose.set('debug', true);