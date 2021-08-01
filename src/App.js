import React from 'react';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Header from './components/Header';

const User = () => <div>User</div>

const Home = () => <div>Home</div>

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
  
}

export default App;