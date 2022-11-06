const express = require('express');
const app = express();

// app.use(express.raw());
// app.use(express.json());
// app.use(express.text());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('This is home page');
})

app.post('/', (req, res)=> {
    console.log(req.body);
    res.send('This is home page with post method');
})

app.listen(3000, () => {
    console.log('listening the port 3000....');
})