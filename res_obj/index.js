const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
    res.send('test route');
})

app.get('/about', (req, res) => {
    /* Response Property
    --------------------
        console.log(res.headersSent);
        res.render('pages/index', {
            name: 'About'
        });
        console.log(res.headersSent);
    */

    /* Response method
    --------------------
        res.json({
            name: 'Bangladesh'
        });
        res.status(200);
        res.end();
        res.sendStatus(400);
        res.format({
            'text/plain': () => {
                res.send('hi');
            },
            'text/html': () => {
                res.render('pages/index', {
                    name: 'About'
                })
            }, 
            'application/json': () => {
                res.send({
                    name: 'Bangladesh'
                });
            },
            default: () => {
                res.status(406).send('not acceptable');
            }
        }); 
        res.cookie('country', 'Bangladesh');
        res.clearCookie('country');
        res.location('/test');
        res.redirect('/test');
        res.set('platform', 'learn express framwork');
        console.log(res.get('platform'));
        res.end();
    */
});

app.listen(3000, () => {
    console.log('listening on the 3000 port....');
});