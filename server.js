const express = require('express');
var cors = require('cors');
var data = require('./data');

const app = express();
const port = process.env.PORT || 3002; 

//middlewares
app.use(cors());

app.get('/', (request, response) => {
    response.send('Welcome to Image Quiz API');
    });

app.get('/quizzes', (request, response) => {
    let metadata = data.quizzes.map(x => {
        return{name: x.name, id: x.id, picture: x.picture}
        });
    response.json(metadata);
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    });