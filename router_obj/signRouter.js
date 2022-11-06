const express = require('express');

const signRouter = express.Router();

signRouter
    .route('/user')
    .all((req, res, next) => {
        console.log('I am logging something');
        next();
    })
    .get((req, res) => {
        res.send('GET');
    })
    .post((req, res) => {
        res.send('POST');
    })
    .put((req, res) => {
        res.send('PUT');
    })
    .delete((req, res) => {
        res.send('DELETE');
    });

module.exports = signRouter;