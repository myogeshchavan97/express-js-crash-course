const mongoose = require('mongoose');

const STATUSES = {
  NOT_STARTED: 'not-started',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed'
};

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    required: false,
    default: STATUSES.NOT_STARTED
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
