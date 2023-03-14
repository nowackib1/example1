import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from "./components/Login/Login";
import LoginContextProvider from "./context/LoginContextProvider";
import MainView from "./components/MainView/MainView";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import './App.css';
import SingleUserView from './components/SingleUserView/SingleUserView';

function App() {
    return (
        <LoginContextProvider>
            <div className="App">
                <NavBar/>

                <div className="below-navbar">
                    
                <SideBar/>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/users-table' element={<MainView/>}/>
                    <Route path='/users/:id' element={<SingleUserView/>}/>
                </Routes>
                </div>
            </div>
        </LoginContextProvider>
    );
}

export default App;
