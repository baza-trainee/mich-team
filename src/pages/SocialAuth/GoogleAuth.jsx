import React, { useContext, useEffect } from "react";
import { SectionLoader } from "./SocialAuth.stuled";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "../../services/google-auth";
import UserContext from "../../UserData/UserContext";

const GoogleAuth = () => {
    const userData = useContext(UserContext);
    const location = new URLSearchParams(window.location.search);

  const history = useNavigate();
  

    useEffect(() => {
       if (location.has('state') && location.has('code')) {
      const state = location.get('state');
      const code = location.get('code');
        
      googleAuth(state, code).then(
        resp => {
        userData.UserData.setUserAccessToken(resp.access);
        userData.UserData.setUserRefreshToken(resp.refresh);

        sessionStorage.setItem("accessToken", resp.access);   
        sessionStorage.setItem("refreshToken", resp.refresh); 
        if (localStorage.getItem("userRemember")) {
            localStorage.setItem("refreshToken", resp.refresh); 
        }
          console.log(resp)
          history('/');
          
        }
      ).catch(error => {
        console.log(error)
        localStorage.setItem("googleAuthError", true);
        history('/signup/');
      }
          
        
      )
    }
  
  },[location])

    return <SectionLoader>
        <Loader/>
    </SectionLoader>
}

export default GoogleAuth;