import React from 'react';
import './style.css';

function Jumbotron({ children }) {
  return (
    <div className="container">
      <div className='jumbotron'>{children}</div>
    </div>
  );
}

export default Jumbotron;
