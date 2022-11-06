const express = require('express');

const adminRouter = express.Router();

const log = (req, res, next) => {
    console.log('I am logging something');
    next();
}

// router.all() 
adminRouter.all('*', log);

adminRouter.get('/', (req, res) => {
    res.send('Deshboard');
});

adminRouter.get('/login', (req, res) => {
    res.send('Login');
});

module.exports = adminRouter;