const listenNotesConfig = {
  baseURL: 'https://listen-api.listennotes.com/api/v2',
  headers: {
    'X-ListenAPI-Key': process.env.NEXT_PUBLIC_LISTEN_NOTES_API_KEY,
  },
};
