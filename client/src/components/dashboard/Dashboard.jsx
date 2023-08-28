import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/constants';
import TodoList from './TodoList/TodoList';
import './Dashboard.scss';

const Dashboard = ({ userInfo }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTodos = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `${BASE_API_URL}/api/todos/${userInfo.user?._id}`
        );
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTodos();
  }, []);
  return (
    <div className='dashboard'>
      <h2 className='heading'>List of Todos</h2>
      {isLoading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <TodoList todos={todos} />
      )}
    </div>
  );
};

export default Dashboard;
