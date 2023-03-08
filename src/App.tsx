import React from 'react';


import NavBar from './components/NavBar/NavBar';
import UsersTable from './components/UserTable/UsersTable';

import './App.css';


const links = [
  { title: 'Username', url: '/' },
  { title: 'About', url: '/about' },

];

const App: React.FC = () => {
  return (
    <div className='app'>
      <NavBar links={links} />
   
    <UsersTable/>
    </div>
  );
};

export default App;
