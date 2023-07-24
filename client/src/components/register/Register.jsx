import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../utils/constants';
import './register.scss';

const Register = ({ setUser }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('state', state);
    const { username, email, password } = state;
    if (
      username.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== ''
    ) {
      setErrorMsg('');
      setSubmitting(true);
      try {
        const { data } = await axios.post(`${BASE_API_URL}/api/users`, {
          ...state,
          name: state.username
        });
        console.log(data);
        setUser(data);
        navigate('/');
      } catch (error) {
        setSubmitting(false);
        console.log(error.response);
        if (error.response) {
          setErrorMsg(error.response.data);
        } else {
          setErrorMsg('Something went wrong. Try again later.');
        }
      }
    } else {
      setErrorMsg('All the fields are required.');
    }
  };

  return (
    <div className='register'>
      <h2 className='heading'>Register Page</h2>
      <Form onSubmit={handleSubmit}>
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
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
        <Button variant='primary' type='submit' disabled={submitting}>
          {submitting ? 'Submitting...' : 'Register'}
        </Button>
        <div className='mt-2'>
          Already have an account? <Link to='/login'>login here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
