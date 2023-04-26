const express = require('express');
const todoRoutes = require('./routes/todo');
require('./db');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use((error, req, res, next) => {
  if (error) {
    const message = error.message || 'Something went wrong. Try again later.';
    const status = error.status || 500;
    return res.status(status).send(message);
  }
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
