import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';

export default function ManageAllOrder() {
  const [allOrders, setAllOrders] = useState([])

  const handleDeleteOrder = id => {
    const proceed = window.confirm('are you sure? you want to delete?')
    if (proceed) {
      fetch(`https://serene-bayou-12088.herokuapp.com/deleteManageOrder/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('delete Successfully')
            const remainingUser = allOrders.filter(order => order._id !== id)
            setAllOrders(remainingUser)
          }
        })
    }


  }
  useEffect(() => {
    fetch('https://serene-bayou-12088.herokuapp.com/allorders')
      .then(res => res.json())
      .then(data => setAllOrders(data))
  }, [])
  return (
    <Container style={{ margin: '5%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>A basic table example with a caption</caption>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Conatct</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Item</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.displayName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.contactnumber}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleDeleteOrder(row._id)} variant="outlined">Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
