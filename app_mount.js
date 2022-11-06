const express = require('express');

const app = express();
const admin = express(); // sub app

admin.get('/dashboard', (req, res) => {
    res.send('Admin Homepage');
});

app.get('/', (req, res) => {
    res.send('welcome to application home');
});

app.use('/admin', admin);

app.listen(3000, () => {
    console.log('listening on the port 3000');
})