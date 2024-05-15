import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mich-team-python.onrender.com',
});

export default instance;


// для додавання token в headers
export const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}