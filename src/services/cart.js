import instance from './instance';
import Cookies from 'js-cookie';

export const getCartItems = async () => {
  try {
    Cookies.set('session_id', '12345', { expires: 7, path: '/' });
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
  const sessionId = Cookies.get('session_id');

  const item = {
    product: '1',
    size: 'NS',
    quantity: '1',
  };
  try {
    console.log(sessionId);
    console.log(`asdasd`);
    const config = {
      headers: {
        Cookie: `sessionid=${sessionId}`,
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
