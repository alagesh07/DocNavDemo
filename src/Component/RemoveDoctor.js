import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RemoveDoctorModal5 from './RemoveDoctorModal';
import './RemoveDoctor.css';
import doctorImage1 from '../assets/1.jpg';

const SearchResults5 = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const conditionQuery = query.get('condition') || '';
  const cityQuery = query.get('city') || '';

  const [providers5, setProviders5] = useState([]);
  const [searchTerm5, setSearchTerm5] = useState('');
  const [isModalOpen5, setIsModalOpen5] = useState(false);
  const [selectedProviderId5, setSelectedProviderId5] = useState(null);

  const allProviders5 = [
    // Provider details here
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
      imageUrl: doctorImage1,
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
  ];

  useEffect(() => {
    const filteredProviders5 = allProviders5.filter(provider =>
      (provider.specialty.toLowerCase().includes(conditionQuery.toLowerCase()) || !conditionQuery) &&
      (provider.city.toLowerCase().includes(cityQuery.toLowerCase()) || !cityQuery) &&
      (provider.name.toLowerCase().includes(searchTerm5.toLowerCase()) || !searchTerm5)
    );
    setProviders5(filteredProviders5);
  }, [conditionQuery, cityQuery, searchTerm5]);

  const handleSearchChange5 = (event) => {
    setSearchTerm5(event.target.value);
  };

  const openModal5 = (id) => {
    setSelectedProviderId5(id);
    setIsModalOpen5(true);
  };

  const closeModal5 = () => {
    setIsModalOpen5(false);
  };

  const confirmRemove5 = () => {
    setProviders5(providers5.filter(provider => provider.id !== selectedProviderId5));
    closeModal5();
  };

  return (
    <div className="search-results5">
      <div className="header5">
        <h1>Find a Doctor</h1>
        <div className="search-bar5">
          <input
            type="text"
            placeholder="Search by doctor"
            value={searchTerm5}
            onChange={handleSearchChange5}
          />
          <button onClick={() => setSearchTerm5(searchTerm5)}>Search</button>
        </div>
      </div>

      <div className="results5">
        {providers5.length > 0 ? (
          providers5.map((provider) => (
            <div className="provider15" key={provider.id}>
              <img src={provider.imageUrl} alt={provider.name} className="provider1-image5" />
              <div className="provider1-info5">
                <h2>{provider.name}</h2>
                <button className="remove5" onClick={() => openModal5(provider.id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>No providers found.</p>
        )}
      </div>

      <RemoveDoctorModal5
        isOpen={isModalOpen5}
        onClose={closeModal5}
        onConfirm={confirmRemove5}
      />
    </div>
  );
};

export default SearchResults5;
