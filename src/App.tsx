import React, { useState } from 'react';
import './App.css';
import GoogleAuthentication from './Authentication/GoogleAuth/GoogleAuthentication';
import FacebookAuthentication from './Authentication/FacebookAuthentication/FacebookAuthentication';
import LinkedInAuthetication from './Authentication/LinkedInAuthentication/LinkedInAuthentication';
import SuccessLogin from './Authentication/SuccesLogin/SuccesLogin';
import GitHubAuthentication from './Authentication/GithubAuthentication/GithubAuthentication';


export interface info {
  name: string;
  photo: string;
}

function App() {
  const [isLogined, setLogined] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", photo: "" } as info);

  if (!isLogined) {
    return (
      <div className="App">
        <header className="App-header">
          <div className="social-logins-block">
            <div>
              <span className="title">Login</span>
            </div>
            <input className="textField" type="text" placeholder="Enter Username" />
            <input className="textField" type="password" placeholder="Enter Password" />
            <div className="social-buttons">
              <GoogleAuthentication
                isLogined={setLogined}
                setUserInfo={setUserInfo}
              />
            </div>
            <div className="social-buttons">
              <FacebookAuthentication
                isLogined={setLogined}
                setUserInfo={setUserInfo}
              />
            </div>
            <div className="social-buttons">
              <LinkedInAuthetication />
            </div>
            <div className="social-buttons">
              <GitHubAuthentication />
            </div>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <SuccessLogin 
          isLogined={setLogined} 
          userData={userInfo} />
      </div>);
  }
}

export default App;
