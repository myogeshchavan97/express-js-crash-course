const express = require('express');

const app = express();

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
  res.send(users);
});

app.listen(3030, () => {
  console.log('server started on port 3030');
});
