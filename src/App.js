import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import MyPosts from './components/ContentProfile/NewPost/MyPost/MyPosts.jsx';


const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <Navigation />
          <MyPosts />
          
    </div>
  );
}

export default App;
