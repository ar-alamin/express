const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');
const signRouter = require('./signRouter');

const app = express();

app.use('/signin', signRouter);
app.use('/admin', adminRouter);
app.use('/', publicRouter);

app.listen(3000, () => {
    console.log('listening on the port 3000....');
});