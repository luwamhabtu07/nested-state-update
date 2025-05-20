// src/UserProfile.js
import React, { useState } from 'react';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Luwam Habtu',
    email: 'luwam@example.com',
    address: {
      street: '',
      city: '',
      country: ''
    }
  });

  const [formData, setFormData] = useState({
    street: '',
    city: '',
    country: ''
  });

  const updateAddress = () => {
    setUserProfile(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        ...formData
      }
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Profile</h2>

      <div>
        <label>Street:</label>
        <input
          type="text"
          value={formData.street}
          onChange={e => setFormData({ ...formData, street: e.target.value })}
        />
      </div>

      <div>
        <label>City:</label>
        <input
          type="text"
          value={formData.city}
          onChange={e => setFormData({ ...formData, city: e.target.value })}
        />
      </div>

      <div>
        <label>Country:</label>
        <input
          type="text"
          value={formData.country}
          onChange={e => setFormData({ ...formData, country: e.target.value })}
        />
      </div>

      <button onClick={updateAddress} style={{ marginTop: '10px' }}>
        Update Address
      </button>

      <h3>Current Profile:</h3>
      <pre>{JSON.stringify(userProfile, null, 2)}</pre>
    </div>
  );
};

export default UserProfile;
