import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import DashboardHomepage from './Dashboard/Screen/DashboardHomepage';
import Employees from './Dashboard/Screen/Employees';
import Projects from './Dashboard/Screen/Projects';
import Assignments from './Dashboard/Screen/Roles';
import Skills from './Dashboard/Screen/Skills';

import Settings from './Dashboard/Screen/Settings';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Departments from './Dashboard/Screen/Departments';




function App() {
  return (
    <div className="App">
      
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/dashboard" element={<DashboardHomepage/>} />
      <Route path="/employees" element={<Employees/>} />
      <Route path="/departments" element={<Departments/>} />
      <Route path="/projects" element={<Projects/>} />
      {/* <Route path="/products" element={<Products/>} /> */}
      <Route path="/Assignments" element={<Assignments/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
      
    </div>
  );
}

export default App;

