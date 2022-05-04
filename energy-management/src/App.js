import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './navbar.component';
import HomePage from './homepage.component';
import Dashboard from './dashboard.component';
import Demo from './demo.component';
import Contatti from './contatti.component';
import Login from './login.component';
import Registrazione from './registrazione.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contatti" component={Contatti} />
        <Route path="/demo" component={Demo} />
        <Route path="/login" component={Login} />
        <Route path="registrazione" component={Registrazione}/>
      </Router>
    </div>
  );
}

export default App;
