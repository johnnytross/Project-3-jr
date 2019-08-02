import React, { Component } from 'react';
<<<<<<< HEAD
import { Route, Redirect } from 'react-router-dom';
=======
import './style.css';
>>>>>>> ba427de8010bab75c04ed04fb403bbf91d7dd087

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
<<<<<<< HEAD
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
=======
          <a className='navbar-brand' href='/login'>
            {this.props.signup ? 'Login' : 'Logout'}
          </a>
          <a className='navbar-brand' href='/signup'>
>>>>>>> ba427de8010bab75c04ed04fb403bbf91d7dd087
            Sign Up
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
