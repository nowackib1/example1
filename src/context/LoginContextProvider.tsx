import React, {createContext, useEffect, useState} from 'react';
import {ContextInterFace, DataFromLogin} from './contextTypes';

export const LoginContext = createContext<ContextInterFace>({
    isLogged: false,
    userName: "",
    checkIfLoggedIn: () => { console.log("XD")
    },
});

type Props = {
    children: JSX.Element,
}
export const LoginContextProvider: React.FC<Props> = ({children}) =>{
    const [loginContext, setLoginContext] = useState<ContextInterFace>({
        isLogged: false,
        userName: "",
        checkIfLoggedIn,
    });

    useEffect(() => {
        const doFetch = async () => {
            try {
                const data = await fetch('/me', {method: "GET"});
                return data;
            } catch (err) { console.log("XD")
            }
        }
        // doFetch().then(data => setLoginContext((prevData: ContextInterFace) => {
        //     return {
        //         ...prevData,
        //         isLogged: (data as DataFromLogin).status === 200 || false,
        //         userName: (data as DataFromLogin).userName || "",
        //     }
        // }));

    }, []);

    async function checkIfLoggedIn() {
        const doFetch = async () => {
            try {
                const data = await fetch('/me', {method: "GET"});
                return data;
            } catch (err) { console.log("XD")
            }
        }
        doFetch().then((data) => setLoginContext((prevData: ContextInterFace) => {
            return {
                ...prevData,
                isLogged: (data as DataFromLogin).isLogged,
                userName: (data as DataFromLogin).userName as string || "",
            }
        }));
    }

    return (
        <LoginContext.Provider value={loginContext}>
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;