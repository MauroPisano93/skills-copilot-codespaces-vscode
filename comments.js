// Create web server.
// Create a path for comments.
// Create a path for comments and add a comment.
// Create a path for comments and delete a comment.
// Create a path for comments and edit a comment.

const express = require('express');
const app = express();
const router = express.Router();

// Create a path for comments.
router.get('/', (req, res) => {
    res.send('Comments Page');
});

// Create a path for comments and add a comment.
router.post('/add', (req, res) => {
    res.send('Add Comment');
});

// Create a path for comments and delete a comment.
router.delete('/delete', (req, res) => {
    res.send('Delete Comment');
});

// Create a path for comments and edit a comment.
router.put('/edit', (req, res) => {
    res.send('Edit Comment');
});

app.use('/comments', router);
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});