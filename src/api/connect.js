// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-room-78toz7buc-wallysom2.vercel.app/'
});

export default api;
