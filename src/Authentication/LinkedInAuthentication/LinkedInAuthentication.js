import React from 'react';
import { LinkedIn } from 'react-linkedin-login-oauth2';

const LinkedInAuthetication = () => {
    const handleSuccess=(res)=>{
        console.log(res);
    }
    const handleFailure=(res)=>{
        console.log(res);
    }
    return (
        <>
            <LinkedIn
                clientId="787j1nfl7kp7kg"
                onFailure={handleFailure}
                onSuccess={handleSuccess}
                redirectUri="https://github.com/Rohit2698/social-login"
            >
                LinkedIn
        </LinkedIn>
        </>
    );
}

export default LinkedInAuthetication;