import React, { useContext, useEffect } from "react";
import { SectionLoader } from "./SocialAuth.stuled";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import UserContext from "../../UserData/UserContext";
import { facebookAuth } from "../../services/facebook-auth";


const FacebookAuth = () => {
    const userData = useContext(UserContext);
    const location = new URLSearchParams(window.location.search);

    const history = useNavigate();

    useEffect(() => {
       if (location.has('state') && location.has('code')) {
      const state = location.get('state');
      const code = location.get('code');
        
      facebookAuth(state, code).then(
        resp => {
        userData.UserData.setUserAccessToken(resp.access);
        userData.UserData.setUserRefreshToken(resp.refresh);

        sessionStorage.setItem("accessToken", resp.access);   
        sessionStorage.setItem("refreshToken", resp.refresh); 
          console.log(resp)
          history('/');
          
        }
      ).catch(error => {
        console.log(error)
        localStorage.setItem("FacebbokAuthError", true);
        history('/signup/');
      }
          
        
      )
    }
  
  },[location])
    
    return <SectionLoader>
        <Loader/>
    </SectionLoader>
}

export default FacebookAuth;