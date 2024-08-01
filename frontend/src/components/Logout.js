import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ email: 'current-email' }), // Replace with actual email
      });

      const data = await response.json();
      if (response.status === 200) {
        logout();
        navigate('/login');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Link onClick={handleLogout} className="NavigationLink">Logout</Link>
  );
};

export default Logout;