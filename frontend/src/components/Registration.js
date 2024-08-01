import React, { useState } from 'react';
import {TextField, Button } from '@radix-ui/themes';

const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto', padding: '20px' }}>
      <h1>Register</h1>
      
     
      <TextField.Root
        id="email"
        name="email"
        type="email"
        placeholder='email'
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <TextField.Root
        id="password"
        name="password"
        type="password"
        minLength='4'
        placeholder='Password'
        value={formData.password}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <Button type="submit" style={{ width: '100%', padding: '10px' }}>Register</Button>
    </form>
  );
};

export default Registration;