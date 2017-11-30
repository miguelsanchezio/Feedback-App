const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello, world.');
})

app.get('/swag', (req,res) => {
    res.send('Swag.');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server is online');
})