const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express();

app.use(bodyParser.json())
app.use(cors())


const commnetsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commnetsByPostId[req.params.id] || [])
});

app.post('/posts/:id/comments', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { comment } = req.body;
    const comments = commnetsByPostId[req.params.id] || []

    comments.push({ id, comment })
    commnetsByPostId[req.params.id] = comments
    await axios.post('http://localhost:9000/events', {
        type: 'CommentCreated', data: {
            id, comment,
            postId: req.params.id
        }
    })
    res.status(201).send(comments)

});

app.post('/events', (req, res) => {
    console.log('event type ------------------------------------->' + req.body.type)

    res.send({})

})



app.listen(5000, () => {
    console.log('listening on 5000')
})