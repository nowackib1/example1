import React from 'react';
import {Button} from "../common/Button/Button";

type Props = {
    func: ()=>void;
}
function Logger({func}: Props) {
    return (
        <div className="login-div">
            <p className="login-div__h1">Login</p>
            <p className="login-div__p">Login using SmartBearID</p>
            <Button text="Login" type="button" className="login-btn con" func={func}/>
        </div>
    );
}

export default Logger;