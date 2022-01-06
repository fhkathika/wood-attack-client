import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './WoodProduct.css'
import { Link } from 'react-router-dom';
import OrderDetailPage from '../../OrderDetailPage/OrderDetailPage';

const SingleProduct = ({product}) => {
    const {_id,name,description,price,image}=product

  
    // window.load(function () {
    //     (".post-module").hover(function () {
    //       (this).find(".description").stop().animate(
    //         {
    //           height: "toggle",
    //           opacity: "toggle"
    //         },
    //         300
    //       );
    //     });
    //   });
       
    return (
   
       <>
    
       <Grid item xs={4} sm={4} md={4} >
         
       <paper class="column">
   <div class="post-module">

      <div class="thumbnail">
        {/* <div class="date">
          <div class="day">27</div>
          <div class="month">Mar</div>
        </div> */}
        <img style={{width:'100%',height:'17.5em'}} src={image}/>
      </div>
    
      <div class="post-content">
        <div class="category">{price} Tk</div>
        <h1 class="title">{name}</h1>
        <h2 class="sub_title">It definitely deserved an Oscar, but not a Golden Globe.</h2>
        <p class="description"> {description}</p>
        <div class="post-meta"> <Link to={`/orderDetailPage/${_id}`}>
       <Button style={{backgroundColor:'#251C14'}} variant="contained">Order Now</Button>
      </Link></div>
           
      </div>
    </div>
  </paper>
      </Grid>
     
      </>
 
    );
};

export default SingleProduct;