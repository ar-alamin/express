const express = require('express');

const app = express();

app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: 'Bangladesh',
    }
    req.userDetails = user;
    next();
})

app.get('/user/:id', (req, res) => {
    console.log(req.userDetails);
    res.send('accessing the get method');
})

app.listen(3000, () => {
    console.log('listening on the port 3000....');
});