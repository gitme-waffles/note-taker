const express = require('express')
const path = require('path');

const app = express();
const PORT = 3001; // port to use, uncoment when needed

app.use(express.static('public'));
