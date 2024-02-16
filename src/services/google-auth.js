import axios from "axios";

// Права доступа
const GOOGLE_SCOPES = [
    'https://www.googleapis.com/auth/userinfo.email', // доступ до адреси електронної пошти
    'https://www.googleapis.com/auth/userinfo.profile' // доступ до інформації профілю
];

const userInstance = axios.create({
    baseURL: 'https://mich-team2.onrender.com/user_auth/',


})

// Посилання на аутентифікацію
const GOOGLE_AUTH_URI = 'https://accounts.google.com/o/oauth2/auth';

// Посилання на отримання токена
export const GOOGLE_TOKEN_URI = 'https://accounts.google.com/o/oauth2/token';

// Посилання на отримання інформації про користувача
export const GOOGLE_USER_INFO_URI = 'https://www.googleapis.com/oauth2/v1/userinfo';

const Google_Oauth_Redirect = 'http://localhost:3000/'
const Google_Oauth_Secret = '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'
const Google_Oauth_ID = '267639891769-ug65o8bh83iq1k2av1fnknrpvk7gn4tn.apps.googleusercontent.com'

const parametersURL = {
    redirect_uri: Google_Oauth_Redirect,
    response_type: 'code',
    client_id: Google_Oauth_ID,
    scope: GOOGLE_SCOPES.join(' ')
};

export const uri = `${GOOGLE_AUTH_URI}?${new URLSearchParams(parametersURL).toString()}`;


const parametersUSER = {
    client_id: Google_Oauth_ID,
    client_secret: Google_Oauth_Secret,
    redirect_uri: Google_Oauth_Redirect,
    grant_type: 'authorization_code',
    code: new URLSearchParams(window.location.search).get('code'),
};


export const requestGoogleDataUser = async () => {

    const { data } = await axios.post(GOOGLE_TOKEN_URI, parametersUSER);


    const token = data.access_token;

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };
    console.log(token)

    const { data: userData } = await axios.get(GOOGLE_USER_INFO_URI, config);

    console.log(userData)

};


export const contWithG = async () => {
    const res = await userInstance.get('/o/google-oauth2/?redirect_uri=http://localhost:3000/')
    window.location.replace(res.data.authorization_url)

    console.log(res.data.authorization_url)
}

export const googleAuth = async (state, code) => {
    if (state && code) {
        const config = {
            headers: {
                'Content-Type': 'application/x-www.form-urlencoded'
            }
        }

        const details = {
            'state': state,
            'code': code
        }

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
        
        const res = await userInstance.post(`/o/google-oauth2/?${formBody}`, config);
        console.log(res);
    
    }
}