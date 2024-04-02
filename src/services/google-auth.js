import axios from "axios";



const userInstance = axios.create({
    baseURL: 'https://mich-team2.onrender.com/user_auth/',


})



export const contWithG = async () => {
    try {
        const res = await userInstance.get('/o/google-oauth2/?redirect_uri=http://localhost:3000/', {
        withCredentials: true
    })
    window.location.replace(res.data.authorization_url)

    } catch(error) {
        console.error('Error during POST request:', error);

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
        const res = await userInstance.post(`/o/google-oauth2/?${formBody}`,formBody, config);
            return res.data;
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    
    } 
