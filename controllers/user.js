const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { getErrorMessage } = require('../utils/functions');

const addUser = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const user = new User({
      ...req.body,
      password: hashedPassword
    });
    await user.save();
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: 'Error while adding user. Try again later.'
      })
    );
  }
};

module.exports = {
  addUser
};
