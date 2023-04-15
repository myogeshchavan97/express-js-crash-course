const express = require('express');
const todoRoutes = require('./routes/todo');
require('./db');

const PORT = process.env.PORT || 3030;

const app = express();

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
