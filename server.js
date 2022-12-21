const express = require('express');
const favicon = require('serve-favicon');
const scripts = require("./scripts");

/* Use either application-environment port or specified port */
const port = process.env.PORT || '8080';

/* Setup Express */
const app = express();

/* Set up the EJS template engine */
app.set('view engine', 'ejs');
app.set('views', './views'); // The directory storing the template files

app.use(favicon(__dirname + '/images/favicon.ico'));

/* Homepage */
app.get('/', (req, res) => {
    res.render('pages/index', {
        stand_name: scripts.generateStandName(),
        stand_desc: scripts.generateStandDescription()
    });
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
    console.log('Open in your browser at http://localhost:' + port);
});