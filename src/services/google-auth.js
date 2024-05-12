import instance from "./instance";
import { setToken } from "./user-autor-app";



export const contWithG = async () => {
    try {
        const res = await instance.get('/user_auth/o/google-oauth2/?redirect_uri=https://mich-team-frontend.vercel.app/google-autorization/', {
        withCredentials: true
        })
         localStorage.removeItem("googleAuthError");
    window.location.replace(res.data.authorization_url)

    } catch(error) {
        console.error('Error during POST request:', error);
        localStorage.setItem("googleAutherror", true);
        history('/signup/');
    }
    
}



export const googleAuth = async (state, code) => {
    
        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        const details = {
            'state': state,
            'code': code
        }

        const formBody = Object.keys(details).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');
        
        try {
        const res = await instance.post(`/user_auth/o/google-oauth2/?${formBody}`,formBody, config);
        setToken(res.data.access);   
        return res.data;
        } catch (error) {
            console.error('Error during POST request:', error);
            localStorage.setItem("googleAuthError", true);
            history('/signup/');
        }
    
    } 
