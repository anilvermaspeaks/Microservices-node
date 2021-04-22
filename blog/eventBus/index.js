const express = require('express');
const axis = require('axios');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');

const app = express();
app.use(bodyParser.json());



app.post('/events', (req, res) => {
    console.log("df,mfmdmd dfm ,m,")

    const event = req.body;

    axios.post('http://localhost:4000/events', event)
    axios.post('http://localhost:5000/events', event)
    axios.post('http://localhost:3001/events', event)

    res.send({ status: 'OK' })

});





app.listen(9000, () => {
    console.log('listening on 9000')
})