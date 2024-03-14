import instance from './instance';

export const getProductsList = async () => {
  try {
    const productsList = await instance.get('/api/products');
    return productsList;
  } catch (error) {
    console.error('Error get product request>>>>', error);
  }
};

export const getProductById = async id => {
  try {
    const {data} = await instance.get(`/api/products/${id}`);
	  return data;
  } catch (error) {
	  console.error('Error get product by id request>>>', error);
  }
};
