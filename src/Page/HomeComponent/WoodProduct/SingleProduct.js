import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';
import OrderDetailPage from '../../OrderDetailPage/OrderDetailPage';

const SingleProduct = ({product}) => {
    const {_id,name,description,price,image}=product

    
    return (
   
       <>
       <Grid item xs={4} sm={4} md={4}>
         
       <Paper style={{margin:'15%'}} elevation={0} >
           <img style={{width:'75%'}} src={image}alt="" />
           <Typography variant="h4" gutterBottom component="div">
       {name}
      </Typography>
           <Typography variant="h5" gutterBottom component="div">
       {price}
      </Typography>
           <Typography variant="h6" gutterBottom component="div">
       {description}
      </Typography>
      <Link to={`/orderDetailPage/${_id}`}>
       <Button variant="contained">Order Now</Button>
      </Link>
     
       </Paper>
      </Grid>
     
      </>
 
    );
};

export default SingleProduct;