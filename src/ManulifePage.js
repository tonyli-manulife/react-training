import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import CalculatorPage from './CalculatorPage';
import './ManulifePage.css'; // Import CSS for styling

export function ManulifePage(props) {
  return (
    <Router>
      <div className='app'>
        <div className='navigation'>
          <div className='logo'>
            <img alt='logo' src={logo} />
          </div>
          <nav className='menu'>
            <ul className='menu-list'>
              <li className='menu-item'><Link to='/'>Home</Link></li>
              <li className='menu-item'><Link to='/details'>Details</Link></li>
              <li className='menu-item'><Link to='/calculator'>Calculator</Link></li>
            </ul>
          </nav>
        </div>
        <div className='main'>
          <div className='header'>
            Welcome to React Training
          </div>
          <div className='content'>
            {props.children}
          </div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/details' element={<DetailPage />} />
            <Route path='/calculator' element={<CalculatorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}