//import logo from './logo.svg';
import React from 'react';
import './App.css';
 import Home from './pages';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
 
  return (
    <div >
      <Router>
       <Home/>
     </Router>
    </div>
  );
}

export default App;


 