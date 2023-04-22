const Todo = require('../models/todo');
const { validateFields } = require('../utils/functions');

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
    const areValidFields = validateFields(req.body);
    if (!areValidFields) {
      return res
        .status(400)
        .send("Only valid fields to update: 'title', 'status'");
    }

    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).send();
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const updateTodo = async (req, res) => {
  try {
    const isValidId = await Todo.findById(req.params.id);
    if (!isValidId) {
      return res.status(400).send('Please enter valid todo id');
    }

    const areValidFields = validateFields(req.body);
    if (!areValidFields) {
      return res
        .status(400)
        .send("Only valid fields to update: 'title', 'status'");
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    });

    // const updatedTodo = await Todo.findOneAndUpdate(
    //   {
    //     _id: req.params.id
    //   },
    //   req.body,
    //   {
    //     new: true
    //   }
    // );
    res.send(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const deleteTodo = async (req, res) => {
  try {
    const isValidId = await Todo.findById(req.params.id);
    if (!isValidId) {
      return res.status(400).send('Please enter valid todo id');
    }
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    res.send(deletedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
};
