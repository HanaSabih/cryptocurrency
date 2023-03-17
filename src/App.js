import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Coins from './components/Coins';
import Details from './components/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Coins />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </Router>
  </div>
);

export default App;
