// UserProfile.js
import React from 'react';
import { useAuth } from './hooks/useAuth'; // Import the custom hook

const UserProfile = () => {
  // Call the custom hook inside the component
  const { user, loading, error } = useAuth(); 

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show an error message if there's an error
  }

  return (
    <div>
      <h1>User Profile</h1>
      {/* Show user data */}
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
