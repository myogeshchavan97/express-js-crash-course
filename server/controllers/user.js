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
    const token = await user.createToken();
    return res.status(201).send({
      user,
      token
    });
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: 'Error while adding user. Try again later.'
      })
    );
  }
};

const authenticateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email
    });
    if (!user) {
      return next(
        getErrorMessage({
          status: 404,
          message: 'User not found with the provided email.'
        })
      );
    }
    const isMatching = await bcrypt.compare(password, user.password);
    console.log('isMatching', isMatching);
    if (!isMatching) {
      return next(
        getErrorMessage({
          status: 400,
          message: 'Invalid credentials.'
        })
      );
    }

    const token = await user.createToken();
    res.send({
      user,
      token
    });
  } catch (error) {
    console.log(error);
    next(
      getErrorMessage({
        message: 'Error while authenticating user. Try again later.'
      })
    );
  }
};

module.exports = {
  addUser,
  authenticateUser
};
