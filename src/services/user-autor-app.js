import instance, { setToken } from './instance';


// для реєстрації користувача
export const requestSignUpUser = async (newUserData) => {

    
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
        const { data } = await instance.post('/user_auth/users/', newUserData, config);
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
    
    const { data } = await instance.post('/user_auth/jwt/create/', UserData, config);
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

    const { data } = await instance.post('/user_auth/users/activation/', UserData, config);
    return data;
}


// для відправки запиту на зміну паролю
export const requestResetPassword = async(email) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };


    const { data } = await instance.post('/user_auth/users/reset_password/', email, config);
    return data;
}

// для зміни паролю користувача
export const requestResetPasswordConfirm = async(userData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };


    const { data } = await instance.post('/user_auth/users/reset_password_confirm/', userData, config);
    return data;
}


// для оновлення accessToken користувача
export const requesRefreshToken = async(refreshToken) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };


    const { data } = await instance.post('/user_auth/jwt/refresh/', refreshToken, config);
    return data;
}
