const express = require('express');
const todoRoutes = require('./routes/todo');
require('./db');

const app = express();

// const todo = new Todo({
//   title: '  Second Todo  ',
//   status: 'completed'
// });

// todo.save();

app.use('/api/todos', todoRoutes);

app.listen(3030, () => {
  console.log('server started on port 3030');
});
