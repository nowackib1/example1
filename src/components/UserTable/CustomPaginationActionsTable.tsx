import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../Serwis/TableService';
import UserRow from './UserRow';
import { SearchBar } from '../SearchBar/SearchBar';
import { IUser } from '../../types/IUser';
import {TablePaginationActions} from "./TablePaginationActions"



const CustomPaginationActionsTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState<IUser[]>([]);
  
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        const data = await getAllUsers().then(el=>setRows(el));
      };
      fetchData();
    }, []);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
  const handeRows=(rows: IUser[])=>{
    setRows(rows)
    setPage(0)
  }
  
    return (
      <>
    <Paper sx={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}>
      <SearchBar rows={rows} func={handeRows}/>
      <TableContainer>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
            <TableRow>
            <TableCell>edito</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions?</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
  
              <UserRow
              key={row.id} 
              id={row.id}
              username={row.username}
              email={row.email}
              action={row.action}/>
              
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
         
  
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                />
            </TableRow>
              
          </TableFooter>
        </Table>
      </TableContainer>
      </Paper>
      </>
    );
  }


  export default CustomPaginationActionsTable;