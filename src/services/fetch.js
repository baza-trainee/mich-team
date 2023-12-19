import axios from 'axios';

const apiUrl = 'https://8bc8-78-26-198-240.ngrok-free.app/api/products/';

export const getAllProducts = async () => {
  try {
    const config = {
      headers: {
        'ngrok-skip-browser-warning': 'hello',
      },
    };
    const response = await axios.get(apiUrl, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
