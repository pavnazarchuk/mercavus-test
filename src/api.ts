import axios from 'axios';

export const api = axios.create({
  url: 'http://localhost:3004/',
});
