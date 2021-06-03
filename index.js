const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let arr = [];

app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

app.post('/email', (req, res) => {
    const email = req.body.email;
    arr.push(email);
    console.log(arr);
    res.redirect('/');
})

app.listen(5000);