import React from 'react'
import UserList from '../T/UserList'

import TablePaginationActions from './TablePaginationActions'

const UsersTable = () => {
  return (
    <>
    <div className="table">
    <input type="text" 
    placeholder='Search'/>



    <TablePaginationActions/>

    <UserList/>
    </div>
    </>
  )
}

export default UsersTable