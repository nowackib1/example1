import React from 'react';
import './NavBar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo1 from "./logo1.png";


interface NavbarProps {
  
  links: {
    title: string;
    url: string;
  }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (

<nav className="navbar">
    


    

      <div className="navbar__left" ><img className='navbar__logo' src={logo1} alt="Logo"/> User Care Center</div>
      <div className="navbar__right"><AccountCircleIcon/> <a href={links[0].url}>{links[0].title}</a></div>
    </nav>


 
      
   
       
     
 
  );
};

export default Navbar;