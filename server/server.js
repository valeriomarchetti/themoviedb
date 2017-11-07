var express = require('express');
require('./db.js');
var app = express();
const PORT = process.env.PORT || 3000;


require('./routes')(app, express);


app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});


