import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

import home1 from './img/home1.jpg';
import home2 from './img/home2.jpg';
import home3 from './img/home3.jpg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="search-bar">
            <input type="text" placeholder="Enter desired location" />
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>

          <div className="image-container">
            <div className="image-card">
              <img src={home1} alt="home1" />
              <p>Text below Image 1</p>
            </div>

            <div className="image-card">
              <img src={home2} alt="home2" />
              <p>Text below Image 2</p>
            </div>

            <div className="image-card">
              <img src={home3} alt="home3" />
              <p>Text below Image 3</p>
            </div>
          </div>

          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;