const express = require('express');

const publicRouter = express.Router();


//
// publicRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'Admin' : 'Anonymous';
//     console.log('I am called once!');
//     next();
// });

publicRouter.param((param, option) => (req, res, next, val) => {
    if(val === option) {
        next();
    } else {
        res.sendStatus(403);
    }
});

publicRouter.param('user', '12');

// publicRouter.get('/:user', (req, res) => {
//     res.send(`Hello ${req.user}`);
// });

publicRouter.get('/:user', (req, res) => {
    res.send('Hello user');
});

module.exports = publicRouter;