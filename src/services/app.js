import axios from 'axios';
 


const userInstance = axios.create({
  baseURL: 'https://9b5d-78-26-198-240.ngrok-free.app/user_auth/',
  

})


// export const setToken = (token) => {
//     userInstance.defaults.headers.common.Authorization = `Bearer ${token}`
// }



export const requestSignUpUser = async (newUserData) => {

    
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        const { data } = await userInstance.post('/users/', newUserData, config);
        console.log(data);
        return data;
    
};


