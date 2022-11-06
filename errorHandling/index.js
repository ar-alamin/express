const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // throw new Error('There was an error!');
    res.send(a);
});

// 404 error handling
app.use((req, res, next) => {
    next('Request url was not found!')
})

// custom error handling
app.use((err, req, res, next) => {
    if(res.headerSent) {
        next('There was a problem');
    } else {
        if(err) {
            res.status(500).send(err.message);
        } else {
            res.status(500).send('There was an error!');
        }
    }
    
})

app.listen(3000, () => {
    console.log('listening on the port 3000');
});