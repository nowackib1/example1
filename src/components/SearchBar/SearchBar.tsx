import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';


import "./SearchBar.css"



interface User {
  id: number;
  username: string;
  email: string;
  action: string
}



interface Props {
  rows: User[],
  func: (rows: User[])=>void;
}


export const SearchBar = ({rows, func}: Props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    const filteredUsers = rows.filter(
      user => user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredUsers)
    func(filteredUsers);

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
