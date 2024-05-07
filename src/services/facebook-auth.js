import axios from "axios";



const userInstance = axios.create({
    baseURL: 'https://mich-team2.onrender.com/user_auth/',


})



export const contWithFacebook = async () => {
    try {
        const res = await userInstance.get('/o/facebook/?redirect_uri=https://mich-team-frontend.vercel.app/facebook-autorization/', {
        withCredentials: true
    })
    window.location.replace(res.data.authorization_url)

    } catch(error) {
        console.error('Error during POST request:', error);

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
        const res = await userInstance.post(`/o/facebook/?${formBody}`,formBody, config);
            console.log("sdxtcfygvubhijnokml");
            return res.data;
        } catch (error) {
            console.error('Error during POST request:', error);
        }
    
    } 
