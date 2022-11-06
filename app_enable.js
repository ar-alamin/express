const express = require('express');

const app = express();

app.enable('case sensitive routing');

app.all('/about', (req, res) => {
    res.send('accessing the all method');
})

app.listen(3000, () => {
    console.log('listening on the port 3000....');
});