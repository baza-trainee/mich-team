import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'https://8bc8-78-26-198-240.ngrok-free.app/user_auth/',
  

})

// export const setToken = (token) => {
//     contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`
// }

export const requestSignUpUser = async (newUserData) => {
    const { data } = await userInstance.post('/users/', newUserData);
    console.log(newUserData);
    console.log(data);
    return data;
};

