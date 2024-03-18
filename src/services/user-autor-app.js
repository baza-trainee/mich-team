import axios from 'axios';
 


const userInstance = axios.create({
  baseURL: 'https://mich-team2.onrender.com/user_auth/',
  

})


export const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}



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

export const requestLoginUser = async (UserData) => {

    
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        };
    const { data } = await userInstance.post('/jwt/create/', UserData, config);
    console.log(data);
        setToken(data.auth_token);
        return data;
    
};




export const requestAtivationUser = async(UserData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

    const { data } = await userInstance.post('/users/activation/', UserData, config);
    return data;
}

export const requestResetPassword = async(email) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };


    const { data } = await userInstance.post('/users/reset_password/', email, config);
    return data;
}