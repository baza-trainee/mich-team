import instance from './instance';


export const addCartItems = async (item) => {

  // const item = {
  //   product: '1',
  //   size: 'NS',
  //   quantity: '1',
  // };
  try {
  
    const { data } = await instance.post('/api/cart/', item);
    console.log(data);
    return data;
  } catch (error) {
    console.error('Помилка при виконанні запиту:', error);
    throw error;
  }
};
