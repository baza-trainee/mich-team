import axios from "axios";

// Права доступа
const GOOGLE_SCOPES = [
    'https://www.googleapis.com/auth/userinfo.email', // доступ до адреси електронної пошти
    'https://www.googleapis.com/auth/userinfo.profile' // доступ до інформації профілю
];

// Посилання на аутентифікацію
const GOOGLE_AUTH_URI = 'https://accounts.google.com/o/oauth2/auth';

// Посилання на отримання токена
export const GOOGLE_TOKEN_URI = 'https://accounts.google.com/o/oauth2/token';

// Посилання на отримання інформації про користувача
export const GOOGLE_USER_INFO_URI = 'https://www.googleapis.com/oauth2/v1/userinfo';

const Google_Oauth_Register = 'https://9b5d-78-26-198-240.ngrok-free.app/signup'
const Google_Oauth_Secret = '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'
const Google_Oauth_ID = '267639891769-ndd2sf4pigkmtr30cjff5eq0oc03qgvq.apps.googleusercontent.com'

const parametersURL = {
    redirect_uri: Google_Oauth_Register,
    response_type: 'code',
    client_id: Google_Oauth_ID,
    scope: GOOGLE_SCOPES.join(' ')
};

export const uri = `${GOOGLE_AUTH_URI}?${new URLSearchParams(parametersURL).toString()}`;


const parametersUSER = {
    client_id: Google_Oauth_ID,
    client_secret: Google_Oauth_Secret,
    redirect_uri: Google_Oauth_Register,
    grant_type: 'authorization_code',
    code: new URLSearchParams(window.location.search).get('code'),
};

export const requestGoogleDataUser = async () => {

        const { data } = await axios.post(GOOGLE_TOKEN_URI, parametersUSER);
        console.log(data);
        return data;
    
};