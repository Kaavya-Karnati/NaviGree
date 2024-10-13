import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavigationBar from './Components/NavigationBar';
import About from './Components/About';
import Chatbot from './Components/Chatbot';
import Team from './Components/Team';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div class="container">
      <Home />
      <About />
      <Chatbot />
      <Team />
      </div>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </Router>
  );
}

export default App;
