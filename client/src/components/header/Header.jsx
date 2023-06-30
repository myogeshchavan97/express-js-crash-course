import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Nav className='menu-items'>
            <div className='left'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
              <Link to='/register' className='nav-link'>
                Register
              </Link>
            </div>
            <div className='right'>
              <Nav.Link href='#register'>Welcome, Guest</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
