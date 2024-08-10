import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Component/AdminDashboard';
import Home from './Component/Home';
import Add from './Component/Add';
import Remove from './Component/Remove'; // Import the Remove component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/remove" element={<Remove />} /> {/* Route for Remove */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
