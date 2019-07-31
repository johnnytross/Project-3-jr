import React from 'react';

function Nav() {
  const userAuth = !localStorage.getItem('token') ? false : true;

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
          {!userAuth ? 'Login' : 'Logout'}
        </a>
        <a className='navbar-brand' href='/signup' style={{ color: 'white' }}>
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Nav;
