import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/add-book' element={<AddBook />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
