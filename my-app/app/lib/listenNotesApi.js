import axios from 'axios';

const listenNotesConfig = {
  baseURL: 'https://listen-api.listennotes.com/api/v2',  // Base URL of Listen Notes API
  headers: {
    'X-ListenAPI-Key': process.env.NEXT_PUBLIC_LISTEN_NOTES_API_KEY,  // Store the API key securely in .env.local
  },
};

const api = axios.create(listenNotesConfig);

export default api;
