import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/Home.js';
import { Department } from './components/Department.js';
import { Employee } from './components/Employee.js';
import { NoPage } from './components/NoPage.js';

function App() {
  return (
    <div>
      <Router>
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/Employee">Employee</Link>
          <Link to="/Department">Department</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Department" element={<Department />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;