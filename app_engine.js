const express = require('express');

const app = express();

app.engine('views engine', 'ejs');

app.route('/events')
    .get((req, res) => {
        // res.send('welcome get page');
        res.render('pages/about');
    })
    .post((req, res)=> {
        res.send('welcome to post method');
    })
    .put((req, res) => {
        res.send('welcome to put method');
    })

app.listen(3000, () => {
    console.log('listening on the port 3000...');
})