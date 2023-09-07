let express = require('express');
let app = express();
const bodyParser = require('body-parser');

console.log('Hello World');

app.use('/public', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    bodyParser.urlencoded({extended: false})
    next();
});

app.route('/name').get((req, res) => {
    res.json({"name": `${req.query.first} ${req.query.last}`});
});

app.get("/:word/echo", (req, res) => {
    res.json({"echo": req.params.word});
});

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({"time": req.time});
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "HELLO JSON"});
    }
    else res.json({"message": "Hello json"});
});





































 module.exports = app;
