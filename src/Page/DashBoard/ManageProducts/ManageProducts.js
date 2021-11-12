import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import userEvent from '@testing-library/user-event';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function ManageProducts() {
    const [products,setProducts]=React.useState([])
    const handleDeleteProduct=id=>{
      const proceed=window.confirm('are you sure? you want to delete?')
      if(proceed){
        fetch(`http://localhost:5000/productDelete/${id}`,{
          method: 'DELETE'
      })
      .then(res =>res.json())
      .then(data=>{
          if(data.deletedCount>0){
              alert('delete Successfully')
              const remainingUser=products.filter(product=>product._id !==id)
              setProducts(remainingUser)
          }
      })
      }
      
       
    }
    React.useEffect(()=>{
        fetch('http://localhost:5000/showItems')
        .then(res =>res.json())
        .then(data =>{
            setProducts(data)
            console.log(data)
        })
    },[products._id])
  return (
   <Container >
 <TableContainer  sx={{ minWidth: 'auto',margin:"5%" }}   component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right"><Button onClick={()=>handleDeleteProduct(row._id)}>Delete</Button></StyledTableCell>
         
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </Container>
  );
}
