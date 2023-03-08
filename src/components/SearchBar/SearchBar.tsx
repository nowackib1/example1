// import { useState } from 'react';

// interface User {
//   id: number;
//   username: string;
//   email: string;
//   action: string
// }

// export const users: User[] = [
//   { id: 1, username: 'John Doe', email: 'john.doe@example.com', action: 'action?' },
//   { id: 2, username: 'Alice Smith', email: 'alice.smith@example.com', action: 'action?' },
//   { id: 3, username: 'Bob Johnson', email: 'bob.johnson@example.com', action: 'action?' },
//   { id: 4, username: 'Emma Davis', email: 'emma.davis@example.com', action: 'action?' },
//   { id: 5, username: 'James Wilson', email: 'james.wilson@example.com', action: 'action?' },
//   { id: 6, username: 'Olivia Lee', email: 'olivia.lee@example.com', action: 'action?' },
//   { id: 7, username: 'Michael Brown', email: 'michael.brown@example.com', action: 'action?' },
//   { id: 8, username: 'Sophia Kim', email: 'sophia.kim@example.com', action: 'action?' },
//   { id: 9, username: 'William Garcia', email: 'william.garcia@example.com', action: 'action?' },
//   { id: 10, username: 'Evelyn Hernandez', email: 'evelyn.hernandez@example.com', action: 'action?' },
// ];
// interface SearchBarProps {
//   users: User[];
// }

// export const SearchBar = ({ users }: SearchBarProps) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     const filteredUsers = users.filter(
//       user => user.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     console.log(filteredUsers);
//     // do something with filteredUsers, e.g. display them in a list
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by email"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>
//         <img src="search-icon.png" alt="Search" />
//       </button>
//     </div>
//   );
// };


import { useState } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
  action: string
}


interface SearchBarProps {
  users: User[];
}


// const users: User[] = [
//     { id: 1, username: 'John Doe', email: 'john.doe@example.com', action: 'action?' },
//     { id: 2, username: 'Alice Smith', email: 'alice.smith@example.com', action: 'action?' },
//     { id: 3, username: 'Bob Johnson', email: 'bob.johnson@example.com', action: 'action?' },
//     { id: 4, username: 'Emma Davis', email: 'emma.davis@example.com', action: 'action?' },
//     { id: 5, username: 'James Wilson', email: 'james.wilson@example.com', action: 'action?' },
//     { id: 6, username: 'Olivia Lee', email: 'olivia.lee@example.com', action: 'action?' },
//     { id: 7, username: 'Michael Brown', email: 'michael.brown@example.com', action: 'action?' },
//     { id: 8, username: 'Sophia Kim', email: 'sophia.kim@example.com', action: 'action?' },
//     { id: 9, username: 'William Garcia', email: 'william.garcia@example.com', action: 'action?' },
//     { id: 10, username: 'Evelyn Hernandez', email: 'evelyn.hernandez@example.com', action: 'action?' },
//   ];

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
    <div>
      <input
        type="text"
        placeholder="Search by email"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>
        <img src="search-icon.png" alt="Search" />
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter(user =>
              user.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.action}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
