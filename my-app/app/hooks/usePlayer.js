import { useState, useEffect } from 'react';
import axios from 'axios';


export const usePlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
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

      const fetchTrack = async () => {
        try {
          const response = await axios.get('YOUR_API_URL/track', config);
          setCurrentTrack(response.data); // Set the track data
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchTrack();
    } else {
      setLoading(false); // If no token, just stop loading
    }
  }, [token]);

  return { currentTrack, loading, error };
};
