import React, { Component } from 'react';
import './style.css';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          <a className='navbar-brand' href='/login'>
            {this.props.signup ? 'Login' : 'Logout'}
          </a>
          <a className='navbar-brand' href='/signup'>
            Sign Up
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
