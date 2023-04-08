const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.static(publicPath));

const users = [
  {
    name: 'Mike',
    age: 30
  },
  {
    name: 'Jerry',
    age: 50
  }
];

app.get('/users', (req, res) => {
  res.status(201).send(users);
});

app.get('/mike', (req, res) => {
  res.send('Hello Mike');
});

app.get('/help', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'help.html');
  res.sendFile(filePath);
});

app.get('*', (req, res) => {
  const filePath = path.join(__dirname, 'public', '404.html');
  res.sendFile(filePath);
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});
