import api from './listenNotesApi';

// Function to search podcasts using the Listen Notes API
export const searchPodcasts = async (query) => {
  try {
    const response = await api.get('/search', {
      params: {
        q: query, // Search query (user input)
        type: 'podcast', // Specify we're searching for podcasts
      },
    });
    return response.data.results; // Return the search results
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return []; // Return an empty array in case of error
  }
};
