import React from 'react';
import Books from './pages/Books';
import Saved from './pages/Saved';
import About from './pages/About';
import Nav from './components/Nav';
import Login from './pages/Login';
import Form from './pages/Form';
import Signup from './components/Signup';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path='/' component={Books} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/saved' component={Saved} />
          <Route path='/about' component={About} />
          <Route path='/forms' component={Form} />
          <Route path='/signup' component={Signup} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
