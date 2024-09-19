import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import './App.css';



function App() {
  return (
    <Router>
      <Route path='/login' Component={Login}></Route>
    </Router>
    );
}

export default App;
