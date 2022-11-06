const express = require('express');

const app = express();
const adminRouter = express.Router();

// router level midleware
const logger = (req, res, next) => {
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.protocol} - ${req.ip}`);
    next();
};

adminRouter.use(logger);

adminRouter.get('/dashboard', (req, res) => {
    res.send('dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) => {
    res.send('This is about page');
});

// error handling midleware
const errorMidleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('There was a serverside error');
};

adminRouter.use(errorMidleware);

app.listen(4000, () => {
    console.log('listening on the port 4000....');
});