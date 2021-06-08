 const express = require('express');
 const router = express.Router();

 router.get('/', (req, res) => {
    res.send({hi: 'there'});
})

let arr = [];

router.post('/email', (req, res) => {
    const email = req.body.email;

    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z])+(.iitr.ac.in)/;

    if(email.match(regx))
    {
        console.log("IITR Student");
    }
    else{
        console.log("NOT AN IITR STUDENT");
    }

    arr.push(email);
    console.log(arr);
    res.redirect('/');
})

module.exports = router;