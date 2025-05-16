// lib/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://concordia-expedition-microservice.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
