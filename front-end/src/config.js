// API Configuration
// In development: uses localhost
// In production: uses deployed backend on Render
const API_URL = import.meta.env.PROD 
  ? 'https://translator-6wph.onrender.com'
  : 'http://localhost:3000';

export const config = {
  apiUrl: `${API_URL}/words`
};

