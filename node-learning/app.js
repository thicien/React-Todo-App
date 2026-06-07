const express = require('express');
const app = express();

app.listen(3000);
app.get('/', (req, res) => {
    res.sendFile('./inde.html', { root: __dirname });
})

app.get('/index', (req, res) => {
    res.redirect('/')
})

app.use((req, res) => {
    res.status(404).sendFile('/', {root: __dirname})
})