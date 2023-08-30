import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='mt-2'>
      Page not found. Go back to <Link to='/'>Home</Link>
    </div>
  );
};

export default NotFound;
