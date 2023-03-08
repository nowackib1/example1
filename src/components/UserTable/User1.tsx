import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface UserProps {
    id: number;
    username: string;
    email: string;
    action: string;
  }
  
  const User1: React.FC<UserProps> = ({ id, username, email, action }) => (
	<TableRow key={id}>
              <TableCell component="th" scope="row">
                {username}
              </TableCell>
              <TableCell>
                {email}
              </TableCell>
              <TableCell>
                {action}
              </TableCell>
            </TableRow>
);
export default User1;