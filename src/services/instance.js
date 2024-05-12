import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mich-team-python.onrender.com',
});

export default instance;
