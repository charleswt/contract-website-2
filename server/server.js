const express = require('express');
const path = require('path');
const db = require('./config/connection');

const PORT = process.env.PORT || 443;
const app = express();

function startServer(){

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist'));
    });
  }
  
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
};
startServer();