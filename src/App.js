import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Slider from './Components/Slider';
function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Slider />} />
      {/* <Route path="/bookshelf" element={<Bookshelf />} /> */}
    </Routes>
  </Router>
    </>
  );
}

export default App;
