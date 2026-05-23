const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
const users = [
    { id: 1, name: 'Thicien' },
    { id: 2, name: 'MUGISHA' }
]

app.get('/users', (req, res) => {
    res.json(users);
})
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(200).json({
        message: 'The new uses added successfully',
        name: newUser
    })
})
app.listen(PORT, () => {
    console.log(`My server is listening to this port ${PORT}`);
})

const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
});
server.listen(3000, 'localhost', () => {
    console.log('My server is listening to the port: 3000')
})

const http = require('http');
const server = http.createServer((req, res) => {
console.log(req)
})
server.listen(3000, 'localhost', () => {
    console.log('My server is listening for port: 3000');
})