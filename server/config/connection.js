const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/hairoscope'
).catch(error=>{
    console.log(error)
})

module.exports = mongoose.connection;
