const path = require('path');

const express = require('express');

const app = express();
const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3021;

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log(`server is running on ${port} port`)
});