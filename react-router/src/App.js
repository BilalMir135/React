import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Repos from './components/Repos';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/contact' component={Contact} />
          <Route path='/shop/:id' component={Repos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
