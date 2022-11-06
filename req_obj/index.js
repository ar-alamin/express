const express = require('express');
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const app = express();
const adminRoute = express.Router();

app.use(cookieParser());
app.use(express.json());

adminRoute.get('/dashboard', (req, res) => {
    console.log(req.route);
    res.send('we are the admin router!');
})

app.use('/admin',adminRoute);

app.get('/user/:id', handler);

app.post('/user/', (req, res) => {
    console.log(req.route);
    res.send('Hello post method!');
})

app.listen(3000, () => {
    console.log('listening on the port 3000....');
})

/*
    request object: property
    ------------------------
    req.baseUrl
    req.originalUrl
    req.path
    req.hostname
    req.ip
    req.method
    req.protocols
    req.params
    req.query
    req.body
    req.secure
    req.cookies
    req.signedCookies

    Request object: method
    ----------------------
    req.accepts
    req.get
*/