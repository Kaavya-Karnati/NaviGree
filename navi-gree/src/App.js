import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div class="container">
      <Home />
      </div>
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </Router>
  );
}

export default App;
