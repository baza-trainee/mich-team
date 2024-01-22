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
