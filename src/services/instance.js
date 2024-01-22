import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://9b5d-78-26-198-240.ngrok-free.app',
});

export default instance;
