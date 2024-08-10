import React from 'react';
import AdminDashboard from './AdminDashboard';
import SearchResults from './SearchResults';
import './Home.css'; // Make sure to import the CSS file

const Home = () => {
  return (
    <div className="home">
      <AdminDashboard />
      <SearchResults />
    </div>
  );
};

export default Home;
