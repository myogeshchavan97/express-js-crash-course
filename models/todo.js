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
    trim: true,
    maxLength: 20
  },
  status: {
    type: String,
    required: false,
    default: STATUSES.NOT_STARTED,
    validate: (value) => {
      if (!Object.values(STATUSES).includes(value)) {
        throw new Error();
      }
    }
  }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
