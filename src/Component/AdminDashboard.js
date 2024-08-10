import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? '' : menu);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>HealthNav</h2>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/home')}>Doctor List</li>
          <li>User List</li>
          <li onClick={() => handleMenuClick('modify')}>
            Modify
            {activeMenu === 'modify' && (
              <ul className="dropdown-menu">
                <li onClick={() => navigate('/remove')}>Remove Doctor</li> {/* Correct navigation */}
                <li onClick={() => navigate('/add')}>Add Doctor</li>
              </ul>
            )}
          </li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
