const express = require('express');
const path = require('path');
require('./db');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'public', '404.html');
  res.sendFile(filePath);
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});
