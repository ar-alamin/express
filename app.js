const express = require('express');
const multer = require('multer');

// file upload
const UPLOADS_FOLDER = './uploads/';

// multer upload object
var upload = multer({
    dest: UPLOADS_FOLDER,
    limits : {
        fileSize: 1000000,
    }
})

const app = express();

/* 
app.post('/',upload.array('avater', 2), (req, res) => {
    res.send('File Upload Successfully');
})

app.post('/',upload.fields([
    {name: 'avater', maxCount: 1},
    {name: 'galary', maxCount: 2}
]), (req, res) => {
    res.send('Successfully');
});
*/

app.post('/',upload.single('avater'), (req, res) => {
    res.send('Successfull');
})


app.listen(3000, () => {
    console.log('listening on the port 3000');
});