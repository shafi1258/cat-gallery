import React, { useState } from 'react';
import './AddUsers.css'; // Import the CSS file

const AddUser = () => {
  const [formData, setFormData] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    username: '',
    address: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the form data here, e.g., send it to a server or store it in state
    console.log('Form Data:', formData);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
        <h1>Add New User</h1>
      <div className="form-group">
        <label>Avatar (Image URL):</label>
        <input
          type="text"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
