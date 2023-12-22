import axios from 'axios';
 


const userInstance = axios.create({
  baseURL: 'https://a021-78-26-198-240.ngrok-free.app/user_auth/',
  

})


// export const setToken = (token) => {
//     contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`
// }

// export const requestSignUpUser = async (newUserData) => {
//     const { data } = await userInstance.post('/users/', newUserData);
//     console.log(newUserData);
//     console.log(data);
//     return data;
// };

export const requestSignUpUser = async (newUserData) => {
    try {
        console.log(newUserData);
        const config = {
            headers: {
<<<<<<< Updated upstream
                'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'application/json',
                // 'ngrok-skip-browser-warning': 'hello',
=======
                'ngrok-skip-browser-warning': 'hello',
>>>>>>> Stashed changes
            },
        };
        const { data } = await userInstance.post('/users/', newUserData, config);
        console.log(newUserData);
        console.log(data);
        return data;
    } catch (error) {
        console.log('Помилка при реєстрації користувача:', error.message);
        throw error; 
    }
};


