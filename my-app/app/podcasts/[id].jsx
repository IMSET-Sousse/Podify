import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../lib/listenNotesApi'; // Reuse the Axios API setup

const PodcastDetails = () => {
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get podcast ID from the URL

  useEffect(() => {
    if (!id) return; // Don't try to fetch data if the ID is not available

    const fetchPodcastDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/podcasts/${id}`);
        setPodcast(response.data); // Assuming response.data has podcast details
      } catch (error) {
        setError('Failed to fetch podcast details');
      } finally {
        setLoading(false);
      }
    };

    fetchPodcastDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!podcast) return <p>Podcast not found.</p>;

  return (
    <div className="podcast-details">
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>
      {/* You can add more podcast details here */}
      <p>Publisher: {podcast.publisher}</p>
      <p>Duration: {podcast.duration} minutes</p>
    </div>
  );
};

export default PodcastDetails;
