import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = ({ userInfo, logoutUser }) => {
  const handleLogout = () => {
    logoutUser();
  };
  return (
    <div className='header'>
      <Navbar bg='light' data-bs-theme='light'>
        <Container>
          <Nav className='menu-items'>
            <div className='left'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
              {!userInfo && (
                <React.Fragment>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                  <Link to='/register' className='nav-link'>
                    Register
                  </Link>
                </React.Fragment>
              )}
            </div>
            <div className='right'>
              <div className='nav-link'>
                Welcome, {userInfo ? userInfo.user.name : 'Guest'}
              </div>
              {userInfo && (
                <a href='/#' onClick={handleLogout} className='nav-link'>
                  Logout
                </a>
              )}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
