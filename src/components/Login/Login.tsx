import React, {useContext, useEffect} from 'react';
import {config} from "../../config/config";
import {LoginContext} from "../../context/LoginContextProvider";
import Logger from './Logger';
import MainView from "../MainView/MainView";
import "./Login.css"
function Login() {
    const {isLogged, checkIfLoggedIn} = useContext(LoginContext);

    useEffect(()=>{
        console.log("XD")
    }, [])
    function handleLoginCLick(){
        window.location.assign(config.LOGIN_ENDPOINT);
    }

    return (
      <>
            {!isLogged ?
                <MainView/> :
                <Logger func={handleLoginCLick}/>}
     </>
    );
}

export default Login;