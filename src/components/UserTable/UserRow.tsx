import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { IUser } from '../../types/IUser'
import { Link } from "react-router-dom";
  
  const UserRow: React.FC<IUser> = ({ id, username, email, action }) => (
	<TableRow key={id}>
                <TableCell component="th" scope="row">

              <Link to={`/users/${id}`}>
              <button>Single</button>
   </Link>


                </TableCell>
              <TableCell>
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
export default UserRow;