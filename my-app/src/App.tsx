import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Customer from './components/Customer';
import Main from './components/Main';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='customer' element={<Customer />} />
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App
