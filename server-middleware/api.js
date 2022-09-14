const bodyParser = require('body-parser');
const app = require('express')();
import axios from 'axios';

app.use(bodyParser.json());

app.all('*', (req, res, next) => {
    console.log('Request passed through middleware');
    next();
})

app.all('/comments', async (req, res) => {
    console.log('Requested comments');
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((comments) => {
        res.status(200).json(comments.data);
    })
    .catch((error) => {
        if (error.response) {
            res.status(error.response.status).send();
        }
    });
});

app.all('/comments/:id', async (req, res) => {
    console.log('Requested a single comment');
    axios.get(
        'https://jsonplaceholder.typicode.com/comments/' + 
        req.params.id
    )
    .then((comments) => {
        res.status(200).json(comments.data);
    })
    .catch((error) => {
        if (error.response) {
            res.status(error.response.status).send();
        }
    });
});

module.exports = app