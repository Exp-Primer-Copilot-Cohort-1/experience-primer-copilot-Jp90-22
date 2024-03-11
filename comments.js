// Create web server
// Create a route for comments
// The route should accept a GET request and respond with a list of comments
// The list of comments should be an array of objects, where each object represents a comment and has the following properties:
// id: the unique id of the comment (a number)
// username: the username of the person who posted the comment
// comment: the comment that was posted
// timestamp: the date and time the comment was posted (in the format "YYYY-MM-DD HH:MM:SS")
// Make sure to set the Content-Type header to application/json in the response

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(comments));
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

const comments = [
    {
        id: 1,
        username: 'Alice',
        comment: 'I love your blog!',
        timestamp: '2019-01-01 10:00:00'
    },
    {
        id: 2,
        username: 'Bob',
        comment: 'Good post.',
        timestamp: '2019-01-02 11:00:00'
    }
];