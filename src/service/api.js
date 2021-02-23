import axios from 'axios';

export const API_KEY = 'c7e4a3e2940a4325b698122f3860d173';

export const api = axios.create({
  baseURL: 'https://api.rawg.io/api',
});
