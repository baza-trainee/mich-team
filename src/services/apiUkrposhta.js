import axios from 'axios';

const getParams = params => {};

const instancePostUkr = axios.create({
  baseURL: 'https://www.ukrposhta.ua/address-classifier-ws',
  headers: {
    Authorization: `Bearer ${process.env.SANDBOXBEAREReCom}`,
  },
});

export const getCityByName = async cityName => {
  // отримання міста по назві повертає масив
  // https://www.ukrposhta.ua/address-classifier-ws/get_city_by_region_id_and_district_id_and_city_ua?city_ua=Київ
  //   29713

  // отримання всіх відділень міста
  // https://www.ukrposhta.ua/address-classifier-ws/get_postoffices_by_city_id?city_id=29713

  try {
    const params = {
      city_ua: cityName,
    };

    const data = await instancePostUkr.get(
      '/get_city_by_region_id_and_district_id_and_city_ua',
      params
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostOfficesByCityId = async (cityName, cityId) => {
  const city = getCityByName(cityName);
  const idCity = city['CITY_ID'];

  const params = {
    CITY_ID: idCity,
  };

  const data = instancePostUkr.get('/get_postoffices_by_city_id', params);

  // STREET_UA_VPZ

  return data;
};

export const getStreetByCityIdCity = (cityId, streetName) => {
  const params = {
    CITY_ID: cityId,
    street_ua: streetName,
  };
  const data = instancePostUkr.get(
    '/get_street_by_region_id_and_district_id_and_city_id_and_street_ua',
    params
  );

  return data;
};


