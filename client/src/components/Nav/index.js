import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

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
      <nav className='navbar navbar-dark dark bg-dark' style={{ opacity: 0.8 }}>
        <div>
          <a className='navbar-brand' href='/' style={{ color: 'white' }}>
            Veganize
          </a>
          <a className='navbar-brand' href='/saved' style={{ color: 'white' }}>
            Saved Recipes
          </a>
          <a className='navbar-brand' href='/about' style={{ color: 'white' }}>
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
