import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Launch from './components/Launch';
import LaunchIndex from './components/LaunchIndex';
import LaunchShoe from './components/LaunchShoe';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/launch'>Launch</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/launch' element={<Launch />}>
          <Route path='/' element={<LaunchIndex />} />
          <Route path=':key' element={<LaunchShoe />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const NotFound = () => {
  return <h1>Not Found!</h1>;
};

export default App;
