import React from "react";
import Books from "./pages/Books";
import Saved from "./pages/Saved"
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Nav />
    <Switch>
    <Route path="/" component={Books} exact />
    <Route path="/saved" component={Saved} />
    <Route component={Error} />
</Switch>
</div>
</BrowserRouter>
  );
}

export default App;

/*<BrowserRouter>
<div>
<Navigation />
<Switch>
  <Route path="/" component={Home} exact />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={Error} />
</Switch>
</div>
</BrowserRouter>
*/
