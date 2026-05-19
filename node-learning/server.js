const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Now Node.js server is running successfully');
});
app.listen(5000, () => {
    console.log('My server starts on this port 5000!')
})