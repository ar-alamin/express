const express = require('express');

const app = express();

app.locals.title = 'My App';

app.get('/', (req, res)=> {
    console.log(app.locals.title);
    res.send('Welcome to the home page with get method');
});

app.listen(3000, ()=> {
    console.log('listening the port 3000...');
})