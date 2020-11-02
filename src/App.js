import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Dashboard/Home';
import Users from './components/Users/Users';
import Reports from './components/Reports/Reports'
import Projects from './components/Projects/Projects'
import Routes from './Routes/Routes';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Users /> */}
      
      <Routes/>

      

    </div>
  );
}

export default App;
