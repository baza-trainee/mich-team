import instance from "./instance";
import { setToken } from "./user-autor-app";


export const contWithFacebook = async () => {
    try {
        const res = await instance.get('/user_auth/o/facebook/?redirect_uri=https://mich-team-frontend.vercel.app/facebook-autorization/', {
        withCredentials: true
        })
    localStorage.removeItem("FacebbokAuthError");
    window.location.replace(res.data.authorization_url)

    } catch(error) {
        console.error('Error during POST request:', error);
        localStorage.setItem("FacebbokAuthError", true);
        history('/signup/');
    }
    
}



export const facebookAuth = async (state, code) => {
    
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
        const res = await instance.post(`/user_auth/o/facebook/?${formBody}`,formBody, config);
        setToken(res.data.access); 
            return res.data;
        } catch (error) {
            console.error('Error during POST request:', error);
            localStorage.setItem("FacebbokAuthError", true);
            history('/signup/');
        }
    
    } 
