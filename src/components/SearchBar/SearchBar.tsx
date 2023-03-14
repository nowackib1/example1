import React from 'react';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"
import { IUser } from '../../types/IUser';


interface SearchBarProps {
  rows: IUser[],
  func: (rows: IUser[])=>void;
}

export const SearchBar: React.FC< SearchBarProps> = ({ rows, func}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
  const filteredUsers = rows.filter(
  user => user.email.toLowerCase().includes(searchTerm.toLowerCase()));
  console.log(filteredUsers)
  func(filteredUsers);
}
  return (
    <>
      <div className="searchContener">
        <div className="inputContener">
          <input
            type="text"
            placeholder="Search for table"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className='searchButton' onClick={handleSearch}>
          <SearchIcon/>
          </button>
        </div>
      </div>
    </>
  )
}
