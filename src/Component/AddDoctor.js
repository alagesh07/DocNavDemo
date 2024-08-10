import React, { useState } from 'react';
import './AddDoctor.css';
import { FaStar } from 'react-icons/fa';

const AddDoctor = () => {
  const [doctorName, setDoctorName] = useState('');
  const [education, setEducation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleAddDoctor = () => {
    const newDoctor = {
      doctorName,
      education,
      specialization,
      experience,
      hospitalAddress,
      rating,
      image,
    };
    console.log('New Doctor Added:', newDoctor);
    // Add logic to save the doctor details to the database or state here.
  };

  return (
    <div className="add-doctor-container">
      <h2>Add Doctor Details</h2>
      <form>
        <div className="form-group">
          <label>Doctor Name:</label>
          <input
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            placeholder="Enter doctor's name"
          />
        </div>

        <div className="form-group">
          <label>Doctor Education:</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter doctor's education"
          />
        </div>

        <div className="form-group">
          <label>Doctor Specialization:</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            placeholder="Enter doctor's specialization"
          />
        </div>

        <div className="form-group">
          <label>Doctor Experience (Years):</label>
          <input
            type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Enter years of experience"
          />
        </div>

        <div className="form-group">
          <label>Hospital Address:</label>
          <input
            type="text"
            value={hospitalAddress}
            onChange={(e) => setHospitalAddress(e.target.value)}
            placeholder="Enter hospital address"
          />
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? 'star selected' : 'star'}
                onClick={() => setRating(index + 1)}
              />
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Doctor Image:</label>
          <input type="file" onChange={handleImageChange} />
          {image && <img src={image} alt="Doctor Preview" className="image-preview" />}
        </div>

        <button type="button" onClick={handleAddDoctor}>Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctor;
