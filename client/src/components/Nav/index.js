import React from 'react';

function Nav() {
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
        <a className='navbar-brand' href='/login' style={{ color: 'white' }}>
          Login
        </a>
        <a className='navbar-brand' href='/forms' style={{ color: 'white' }}>
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Nav;
