import React from 'react';
import './App.css';
import Home from './components/Home';
import Stories from './components/Stories';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <Home />
      </div>
      <div className="stories">
        <Stories />
      </div>
      <div className="clearfix"></div>
    </div>
  );
}

export default App;
