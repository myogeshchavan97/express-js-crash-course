const Todo = require('../models/todo');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const addTodo = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send();
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  getTodos,
  addTodo
};
