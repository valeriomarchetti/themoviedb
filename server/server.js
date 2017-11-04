var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;


require('./routes')(app, express);


app.listen(3000, function () {
    console.log(`http://localhost:3000`);
});


