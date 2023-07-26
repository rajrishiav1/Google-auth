import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import jwt_decode from 'jwt-decode'
const Gmailauth = () => {
  return (
    <div>
      <h1>hi rishav you are in Gmail auth</h1>
      <GoogleOAuthProvider clientId="please get your own client id from google cloud">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            var decode= jwt_decode(credentialResponse.credential)
            console.log(decode);
            
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
       
      </GoogleOAuthProvider>
    </div>
  );
};

export default Gmailauth;
