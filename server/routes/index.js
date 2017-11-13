module.exports = function (app, express) {

    var path = require('path');

    app.use('/bootstrap', express.static(path.join(__dirname, '..', '..', 'node_modules', 'bootstrap', 'dist')));
    app.use('/jquery', express.static(path.join(__dirname, '..', '..', 'node_modules', 'jquery', 'dist')));
    app.use('/angular', express.static(path.join(__dirname, '..', '..', 'node_modules', 'angular')));
    app.use('/images', express.static(path.join(__dirname, '..', '..', 'public', 'images')));
    app.use('/css', express.static(path.join(__dirname, '..', '..', 'public', 'css')));
    app.use('/js', express.static(path.join(__dirname, '..', '..', 'public', 'js')));
    app.use('/app', express.static(path.join(__dirname, '..', '..', 'app')));
    
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
    });

    app.use('/api/genres', require('./genres'));
    app.use('/api/films', require('./films'));
    app.use('/api/tvs', require('./tvs'));

    /*
    app.get('/*', (req, res) => {
        res.status(404).redirect("/");
    });
    */
}