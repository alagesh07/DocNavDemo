import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResults.css';
import doctorImage1 from '../assets/1.jpg';
import doctorImage2 from '../assets/2.jpg';
import { FaStar } from 'react-icons/fa';

const SearchResults3 = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const conditionQuery = query.get('condition') || '';
  const cityQuery = query.get('city') || '';

  const [providers, setProviders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const allProviders = [
    {
      id: 1,
      name: 'Dr. Raj Kumar',
      specialty: 'Dentist',
      experience: '15 years of Experience',
      qualifications: 'MBBS, Dental',
      city: 'Gandhipuram',
      consultationFee: '₹ 299/-',
      imageUrl: doctorImage1,
      rating: 4.6,
      reviews: 414,
    },
    {
      id: 2,
      name: 'Dr. Arun Kumar',
      specialty: 'Dentist',
      experience: '8 years of Experience',
      qualifications: 'MBBS, Dental - General Medicine',
      city: 'Gandhipuram',
      consultationFee: '₹ 499/-',
      imageUrl: doctorImage2,
      rating: 4.5,
      reviews: 189,
    },
    {
      id: 3,
      name: 'Dr. Raj Kumar',
      specialty: 'Dentist',
      experience: '15 years of Experience',
      qualifications: 'MBBS, Dental',
      city: 'Gandhipuram',
      consultationFee: '₹ 299/-',
      imageUrl: doctorImage1,
      rating: 4.6,
      reviews: 414,
    },
    {
      id: 4,
      name: 'Dr. Raj Kumar',
      specialty: 'Dentist',
      experience: '15 years of Experience',
      qualifications: 'MBBS, Dental',
      city: 'Gandhipuram',
      consultationFee: '₹ 299/-',
      imageUrl: doctorImage1,
      rating: 4.6,
      reviews: 414,
    },
  ];

  useEffect(() => {
    const filteredProviders = allProviders.filter(provider =>
      (provider.specialty.toLowerCase().includes(conditionQuery.toLowerCase()) || !conditionQuery) &&
      (provider.city.toLowerCase().includes(cityQuery.toLowerCase()) || !cityQuery) &&
      (provider.name.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm)
    );
    setProviders(filteredProviders);
  }, [conditionQuery, cityQuery, searchTerm]);

  const handleSearchChange3 = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-results3">
      <div className="header3">
        <h13>Doctors List</h13>
        <div className="search-bar3">
          <input
            type="text"
            placeholder="Search by doctor"
            value={searchTerm}
            onChange={handleSearchChange3}
          />
          <button onClick={() => setSearchTerm(searchTerm)}>Search</button>
        </div>
      </div>

      <div className="results3">
        {providers.length > 0 ? (
          providers.map((provider) => (
            <div className="provider13" key={provider.id}>
              <img src={provider.imageUrl} alt={provider.name} />
              <div className="provider1-info3">
                <h23>{provider.name}</h23>
                <p className="experience3">{provider.experience}</p>
                <p className="qualifications3">{provider.qualifications}</p>
                <p className="city3">{provider.city}</p>
                <hr className="separator3" />
                <div className="rating3">
                  <FaStar className="star-icon3" /> {provider.rating} • {provider.reviews} Patient Stories
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No providers found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults3;
