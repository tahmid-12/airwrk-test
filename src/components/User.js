import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/base';
import UserDialog from './UserDialog';

function User() {

  const [user,setUser] = useState([]);
  const [open,setOpen] = useState(false);
  const [value, setValue] = useState([]);

  const handleOpen = (user) => {
      setOpen(true);
      setValue(user);
      console.log("Modal Open",user)
  }

  const handleClose = () => {
      setOpen(false);
  }
  
  useEffect(() => {  
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
          setUser(response.data);
      })
  },[]);

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ textAign: "center" }}>ID</TableCell>
                        <TableCell style={{ textAign: "center" }}>Name</TableCell>
                        <TableCell style={{ textAign: "center" }}>Username</TableCell>
                        <TableCell style={{ textAign: "center" }}>Email</TableCell>
                        <TableCell style={{ textAign: "center" }}>Address</TableCell>
                        <TableCell style={{ textAign: "center" }}>Phone</TableCell>
                        <TableCell style={{ textAign: "center" }}>Website</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                                user.map((usr) => {
                                    return(
                                      <TableRow key={usr.id}>
                                        <TableCell>{usr.id}</TableCell>
                                        <TableCell>{usr.name}</TableCell>
                                        <TableCell>{usr.username}</TableCell>
                                        <TableCell>{usr.email}</TableCell>
                                        <TableCell>
                                            {usr.address['street']}  {usr.address['city']} {usr.address['suite']}
                                        </TableCell>
                                        <TableCell>{usr.phone}</TableCell>
                                        <TableCell>{usr.website}</TableCell>
                                        <TableCell>
                                            <Button onClick={() => handleOpen(usr)}>Edit</Button>
                                            <Button>Delete</Button>
                                        </TableCell>
                                      </TableRow>  
                                    );
                                })
                        }
                </TableBody>
                <UserDialog open={open} onClose={handleClose} value={value}/>
            </Table>
        </TableContainer>
    </div>
  )
}

export default User