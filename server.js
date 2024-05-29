const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use(express.static(path.join(__dirname, './')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
  });

app.listen(PORT, (req, res)=>{
    console.log(`server running on port ${PORT}!`);
});