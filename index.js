var itownhall = require('investortownhall');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/src'));

// views is directory for all template files
app.set('app', __dirname + '/src');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('./src/index.html');
});

app.get('/itownhall', function(request, response) {
    response.send(itownhall());
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});