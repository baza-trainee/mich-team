import instance from './instance';

export const getCartItems = async () => {
  try {
    const config = {
      headers: {
        'ngrok-skip-browser-warning': 'hello',
      },
    };
    const { data } = await instance.get('/api/cart/', config);
    return data;
  } catch (error) {
    console.error('Помилка при виконанні запиту:', error);
    throw error;
  }
};

export const addCartItems = async () => {
  const item = {
    product: '1',
    size: 'NS',
    quantity: '1',
  };
  try {
    const config = {
      headers: {
        'ngrok-skip-browser-warning': 'hello',
      },
    };
    const { data } = await instance.post('/api/cart/', item, config);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Помилка при виконанні запиту:', error);
    throw error;
  }
};
