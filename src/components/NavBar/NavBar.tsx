import React, {useContext} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo1 from "../../utilites/img/logo1.png";

import './NavBar.css';
import {LoginContext} from "../../context/LoginContextProvider";



const NavBar = () => {
  const {userName} = useContext(LoginContext);
  return (

<nav className="navbar">
    <div className="navbar__left" ><img className='navbar__logo' src={logo1} alt="Logo"/> User Care Center</div>
    <div className="navbar__right"><AccountCircleIcon/>{userName}</div>
  </nav>


 
);
};

export default NavBar;
   