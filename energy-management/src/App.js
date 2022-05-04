import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar.component';
import HomePage from './components/homepage.component';
import Dashboard from './components/dashboard.component';
import Demo from './components/demo.component';
import Contatti from './components/contatti.component';
import Login from './components/login.component';
import Registrazione from './components/registrazione.component';

export default function App() {
  return (
    <div className="App">      
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/demo" element={<Demo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrazione" element={<Registrazione/>}/>
      </Routes>

    </div>
  );
}