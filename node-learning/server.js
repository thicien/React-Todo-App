const express = require('express');
const app = express();
app.get('/', (req, res) => {
    console.log("My server is well configured");
})
app.listen(5000, () => {
    console.log("My server is listening to this port");
})