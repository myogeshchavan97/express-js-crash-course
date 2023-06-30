import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const [state, setState] = useState({
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
    <div className='login'>
      <h2 className='heading'>Login Page</h2>
      <Form onSubmit={handleSubmit}>
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
          Login
        </Button>
        <div className='mt-2'>
          Don't have an account? <Link to='/register'>register here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
