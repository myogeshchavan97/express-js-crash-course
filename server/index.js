const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');
require('./db');

const PORT = process.env.PORT || 3030;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

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
