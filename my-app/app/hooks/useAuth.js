import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('authToken'); // Or wherever you store the token

  useEffect(() => {
    if (token) {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };

      const fetchUserData = async () => {
        try {
          const response = await axios.get('YOUR_API_URL', config);
          setUser(response.data); // Set the user data
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchUserData();
    } else {
      setLoading(false); // If no token, just stop loading
    }
  }, [token]);

  return { user, loading, error };
};
