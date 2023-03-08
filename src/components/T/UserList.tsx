import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../Serwis/TableService';
type User = {
  id: number;
  username: string;
  email: string;
  action: string;
  // it's a good idea to add more properties to this type if your API response has more data
};


const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const data = await getAllUsers().then(el=>setUsers(el));
    };
    fetchData();
  }, []);



  console.log(users)
  return (
    <div>
      <table>
        <thead>
           <tr>
            <th>username</th>
            <th>email</th>
            <th>actions</th>
            
            </tr>
            </thead>

<tbody>
{users.map((user) => (

<tr key={user.id}>
    <th>{user.username}</th>
    <th>{user.email}</th>  
    <th>{user.action}</th>
</tr>


        
        ))}


</tbody>

      </table>
      
    </div>
  );
};

export default UserList;