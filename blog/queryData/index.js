const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

app.use(bodyParser.json())
app.use(cors())


const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;
    if (type === 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] }
    }
    if (type === 'CommentCreated') {
        const { id, comment, postId } = data;
        const post = posts[postId];
        post.comments.push({ id, comment })
        posts[postId] = post;
    }
    res.send({})
});



app.listen(3001, () => {
    console.log('listening on 3001')
})