import { useEffect, useState } from 'react';
import axios from 'axios';
import listenNotesConfig from '../lib/listenNotesApi'; // Import your API configuration
import '../styles/globals.css';  // Make sure this points to the correct path

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch podcasts when the component mounts or when search is triggered
  const fetchPodcasts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/search?q=technology&genre=All', listenNotesConfig);
      setPodcasts(response.data.podcasts); // Assuming response structure contains podcasts
    } catch (err) {
      console.error('Error fetching podcasts:', err);
      setError('Failed to fetch podcasts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPodcasts();
  }, []); // This will run only once when the component mounts

  return (
    <div>
      <h1>Podcasts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div>
        {podcasts.length > 0 ? (
          podcasts.map((podcast) => (
            <div key={podcast.id}>
              <h2>{podcast.title}</h2>
              <p>{podcast.description}</p>
            </div>
          ))
        ) : (
          <p>No podcasts found</p>
        )}
      </div>
    </div>
  );
};

export default Podcast;
