import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


import "./SearchBar.css"



interface User {
  id: number;
  username: string;
  email: string;
  action: string
}


interface SearchBarProps {
  users: User[];
}


export const SearchBar = ({ users }: SearchBarProps) => {



  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredUsers = users.filter(
      user => user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredUsers);
    // do something with filteredUsers, e.g. display them in a list
  };

  return (
    <div className="szukaj">
      <input
        type="text"
        placeholder="Search by email"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <SearchIcon/>
      </button>
     
    </div>
  );
};
