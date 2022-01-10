import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Navigation from './components/Navigation';
import ContentProfile from './components/ContentProfile';



const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <Navigation />
          <ContentProfile />
          
    </div>
  );
}

export default App;
