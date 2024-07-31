
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        } />
          <Route path="/" element={<Home/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
