import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../utils/constants';
import './AddTodo.scss';

const AddTodo = ({ userInfo }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    title: '',
    status: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
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
    const { title, status } = state;
    if (title.trim() !== '' && status.trim() !== '') {
      setErrorMsg('');
      setSuccessMsg('');
      setSubmitting(true);
      try {
        const { data } = await axios.post(`${BASE_API_URL}/api/todos`, {
          ...state,
          owner: userInfo.user?._id
        });
        console.log(data);
        setSuccessMsg('Todo is added successfully.');
        setTimeout(() => {
          setSuccessMsg('');
          navigate('/');
        }, 3000);
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
    <div className='add-todo'>
      <h2 className='heading'>Add Todo</h2>
      <Form onSubmit={handleSubmit}>
        {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        {successMsg && <p className='success-msg'>{successMsg}</p>}
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter your title'
            name='title'
            value={state.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='status'>
          <Form.Label>Status</Form.Label>
          <Form.Select
            aria-label='Select your status'
            name='status'
            onChange={handleChange}
          >
            <option value=''>Select Status</option>
            <option value='not-started'>Not Started</option>
            <option value='in-progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </Form.Select>
        </Form.Group>
        <Button variant='primary' type='submit' disabled={submitting}>
          {submitting ? 'Submitting...' : 'Add Todo'}
        </Button>
      </Form>
    </div>
  );
};

export default AddTodo;
