const express = require('express');
const app = express();
const path = require('path');

const getPath = path.join(__dirname,'Public');

app.use(express.static(getPath)); // middle ware to load static pages

app.listen(5000);