const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes')

const PORT = process.env.PORT || 443;
const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(routes);
  
  if (process.env.NODE_ENV === 'production' || !process.env.NODE_ENV) {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist'));
    });
  }
  db.once('open', ()=>{
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`, path);
    });
  })