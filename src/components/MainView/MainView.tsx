import React, {useContext} from 'react';
import {LoginContext} from "../../context/LoginContextProvider";
import UsersTable from "../UserTable/UsersTable";

export function MainView() {
    const {isLogged, checkIfLoggedIn} = useContext(LoginContext);
    return (
        <div>
            <UsersTable/>
        </div>
    );
}

export default MainView;