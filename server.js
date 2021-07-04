// node server
// serve developed for CSM Concrete Stages Manager
// for: ab ingénieurs sa - Fribourg

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/assets'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('listening on 3000')
})
