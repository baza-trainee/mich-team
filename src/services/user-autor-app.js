import axios from 'axios';
 

// базовий url
const userInstance = axios.create({
  baseURL: 'https://mich-team2.onrender.com/user_auth/',
  

})

// для додавання token в headers
export const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}


// для реєстрації користувача
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

// для логіну користувача
export const requestLoginUser = async (UserData) => {   
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
    };
    
    const { data } = await userInstance.post('/jwt/create/', UserData, config);
    console.log(data);
        setToken(data.access);
        return data;
    
};



// для активації користувача
export const requestAtivationUser = async(UserData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

    const { data } = await userInstance.post('/users/activation/', UserData, config);
    return data;
}


// для відправки запиту на зміну паролю
export const requestResetPassword = async(email) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };


    const { data } = await userInstance.post('/users/reset_password/', email, config);
    return data;
}

// для зміни паролю користувача
export const requestResetPasswordConfirm = async(userData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };


    const { data } = await userInstance.post('/users/reset_password_confirm/', userData, config);
    return data;
}