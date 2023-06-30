import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('state', state);
  };

  return (
    <div className='register'>
      <h2 className='heading'>Register Page</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your name'
            name='username'
            value={state.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            name='email'
            value={state.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            name='password'
            value={state.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Register
        </Button>
        <div className='mt-2'>
          Already have an account? <Link to='/login'>login here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
