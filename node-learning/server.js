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
        message: 'The new user added successfully',
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
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write
})

server.listen(3000, 'localhost', () => {
    console.log('My server is listening for port: 3000');
})


const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const itemRoutes = require('./Routes/itemRoutes');
const app = express();
app.use(express.json());
app.use('/items', itemRoutes);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Mongo is connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on this port ${process.env.PORT}`)
        })
    }) 
    .catch(error => {
        console.log(error);
    })
