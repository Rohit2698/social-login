import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { userInfo } from '../GoogleAuth/GoogleAuthentication';

interface INativeProps {
    isLogined: (login: boolean) => void;
    setUserInfo: (userInfo: userInfo) => void;
}

const FacebookAuthentication = (props: INativeProps) => {
    const responseFacebook=(res:any)=>{
        if (res.accessToken) {
            props.setUserInfo(
                {
                    name: res.name,
                    photo: res.picture.data.url
                });
            props.isLogined(true);
        }
    }
    
    return (
        <>
            <FacebookLogin
                appId="340303753838817" // Your App ID
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook} // Function
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
            />
        </>
    );
}

export default FacebookAuthentication;