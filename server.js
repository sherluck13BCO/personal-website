var express = require('express');
var consolidate = require('consolidate');
const database = require('./database');
const Contact = require('./models').Contact;
const bodyparser = require('body-parser');
const flash = require('express-flash');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const middlewares = require("middlewares");
const app = express();
const path = require('path');

app.engine('html', consolidate.nunjucks);
app.set('views', './templates');


app.use('/', express.static('./static'));
app.use('/', express.static('./'));
// app.use(bodyparser.urlencoded());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieparser('secret-cookie'));
app.use(session({ resave: false, saveUninitialized: false, secret: 'secret-cookie' }));
app.use(flash());


app.get('/', function(req, res){
        // res.send('hello');
        res.render('index.html');
});

app.get('/index.html', function(req, res){
        // res.send('hello');
        res.render('index.html');
});

app.post('/contact', function(req, res){
        console.log(req.body);
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;

        Contact.create({
        name: name,
        email: email,
        message: message
    });

    res.redirect('/');

});


app.listen(37280, function(){
        console.log('Server is running at port 37280');
});
