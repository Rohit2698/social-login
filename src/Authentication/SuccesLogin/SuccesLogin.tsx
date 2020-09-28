import React from 'react';
import { info } from '../../App';
import '../../App.css';

interface ISuccessLoginNativeProps {
    userData: info;
    isLogined: (login: boolean) => void;
}

const SuccessLogin = (props: ISuccessLoginNativeProps) => {
    return (
        <div className="App">
            <header className="App-header">
                <div className="social-logins-block">
                    <div>
                        <img
                            src={props.userData.photo}
                            height={"200px"}
                            width={"300px"}
                        />
                    </div>
                    <div>
                        <span className="user-name">
                            {props.userData.name}
                        </span>
                    </div>
                    <div>
                        <button onClick={() => props.isLogined(false)}>Logout</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default SuccessLogin;