import React from 'react';
// import logo from './logo.svg';
import profileImage from './img/mysticker.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My react App</h1>
      <h2>Author: Sasi Preetham</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
