import React, { useEffect, useState } from 'react';

const UserDetails = ({ showNotification }) => {
  const [user, setUser] = useState(null);

  const fetchUserDetails = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      showNotification('No token found, please log in.', 'error');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        showNotification(data.message, 'error');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      showNotification('Error fetching user details!', 'error');
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <p><strong>First Name:</strong> {user.first_name}</p>
      <p><strong>Last Name:</strong> {user.last_name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserDetails;
