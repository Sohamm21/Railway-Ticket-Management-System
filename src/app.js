var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RailwayTicket');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

var app = express()


app.use(bodyParser.json());
const path = require("path")
const static_path = path.join(__dirname, "../../frontend/");
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var pass = req.body.password;

    var data = {
        "name": name,
        "email": email,
        "phone": phone,
        "password": pass
    }
    db.collection('sign_up').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });

    return res.redirect('loggedIn.html');
})

app.post('/login', async function(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await db.collection('sign_up').findOne({email});
        if (useremail.password === password) {
            res.redirect('loggedIn.html');
        } else {
            res(alert("Invalid login details"));
        }
        } catch (error) {
        res.status(400).send("Invalid Email")
    }
});


app.get('/', function (req, res) {
    res.set({
        'Access-control-Allow-Origin': '*'
    });
    return res.redirect('index.html');
}).listen(3000)


console.log("server listening at port 3000");