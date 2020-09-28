import React from 'react';
import GitHubLogin from 'react-github-login';

const GitHubAuthentication = () => {
    const onSuccess = (res) => {
        console.log(res);
    }
    const onFailure = (res) => {
        console.log(res);
    }
    return (
        <>
            <GitHubLogin clientId="fe9cfa5e370f7273b68e"
                onSuccess={onSuccess}
                onFailure={onFailure} 
            />
        </>
    );
}

export default GitHubAuthentication;