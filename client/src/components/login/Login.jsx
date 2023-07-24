import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../utils/constants';
import './login.scss';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
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
    const { email, password } = state;
    if (email.trim() !== '' && password.trim() !== '') {
      setErrorMsg('');
      setSubmitting(true);
      try {
        const { data } = await axios.post(
          `${BASE_API_URL}/api/users/login`,
          state
        );
        console.log(data);
        setUser(data);
        navigate('/');
      } catch (error) {
        console.log('error', error);
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
    <div className='login'>
      <h2 className='heading'>Login Page</h2>
      <Form onSubmit={handleSubmit}>
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
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
          {submitting ? 'Submitting...' : 'Login'}
        </Button>
        <div className='mt-2'>
          Don't have an account? <Link to='/register'>register here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
