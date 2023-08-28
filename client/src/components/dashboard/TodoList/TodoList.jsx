import React from 'react';
import { Table } from 'react-bootstrap';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import './TodoList.scss';

const TodoList = ({ todos }) => {
  return (
    <div className='todo-list'>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ title, status, createdAt, _id }, index) => (
            <tr key={_id}>
              <td>{index + 1}</td>
              <td>{title}</td>
              <td>{status}</td>
              <td>
                {new Date(createdAt).toLocaleDateString('en-Us', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </td>
              <td>
                <AiFillEdit size={25} className='icon' />
              </td>
              <td>
                <AiFillDelete size={25} className='icon' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
