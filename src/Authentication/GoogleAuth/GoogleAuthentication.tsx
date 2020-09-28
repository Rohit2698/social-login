import React from 'react';
import GoogleLogin from 'react-google-login';


export type userInfo = {
    name: string;
    photo: string;
}

interface INativeProps {
    isLogined: (login: boolean) => void;
    setUserInfo: (userInfo: userInfo) => void;
}

const GoogleAuthentication = (props: INativeProps) => {
    const responseGoogle = (res: any) => {
        if (res.accessToken) {
            props.setUserInfo(
                {
                    name: res.profileObj.name,
                    photo: res.profileObj.imageUrl
                });
            props.isLogined(true);
        }
    }
    function responseFailure(res: any) {
        console.log(res);
    }
    return (
        <>
            <GoogleLogin
                clientId="327021655196-efamm3ol6roanbmon0cbt013d9msrttv.apps.googleusercontent.com" //clientId
                buttonText="Login with Google"
                onSuccess={responseGoogle} //function call on success
                onFailure={responseFailure} //function call on failure
            />
        </>
    );
}

export default GoogleAuthentication;