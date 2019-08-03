import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
import './style.css';

class Nav extends Component {
  state = {
    redirect: false
  };

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  render() {
    const authentication = localStorage.getItem('token');
    return (
      <nav className='navbar'>
        <div>
          <a className='navbar-brand' href='/'>
            Veganize
          </a>
          <a className='navbar-brand' href='/saved'>
            Saved Recipes
          </a>
          <a className='navbar-brand' href='/about'>
            About
          </a>
        </div>
        <div>
          {!authentication ? (
            <a
              className='navbar-brand'
              href='/login'
              style={{ color: 'white' }}
            >
              Login
            </a>
          ) : (
            <a
              onClick={this.logout}
              className='navbar-brand'
              href='/login'
              style={{ color: 'white' }}
            >
              Logout
            </a>
          )}
          <a className='navbar-brand' href='/signup' style={{ color: 'white' }}>
            Sign Up
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
