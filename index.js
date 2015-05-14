var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// curl -v http://localhost:3000/heydude
app.get('/heydude', function(req, res) {
    res.status(200).send("hi pete");
});

// curl -X POST http://localhost:3000/morestuff -H 'Content-type: application/json' -d '{"something": 3}'
app.post('/morestuff', function(req, res) {
    if (!req.body.something)
        return res.status(400).send({ reason: 'missing something' });

    res.status(200).send({ stuff: 'you sent me ' + req.body.something });
});

app.listen(3000);
