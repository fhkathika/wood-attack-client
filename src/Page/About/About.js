import { Container, Grid } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <Container>
            <h1 style={{color:'#251C14'}}>About Us</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid style={{margin:'auto'}} xs={4} sm={4} md={8} >
  <h2>HANDCRAFTED TOYS MAKE GREAT GIFTS</h2>
  <p>The holidays are fast approaching, time to find cool and meaningful gifts for loved ones-especially kids! For many woodworkers, there is no finding–it's all in the making! Handcrafted wooden toys can be simple or complex, easy and fun to make, and just ask any kid, fun to play with too! 
Woodcraft is your source for woodworking know-how, tools, plus easy-to-follow plans for toys of all types. Our toy plans feature step-by-step instructions, drawings and photos, and great for woodworkers of all skill levels. 

Handcrafted toys are fun to make, fun to play with, and built to last with your very own hands! Happy Holidays and happy gift-making!</p>
  </Grid>
  <Grid item xs={4} sm={4} md={4}>
   <img src='https://i.ibb.co/RNDdLKf/bg2.jpg'></img>
  </Grid>
 
</Grid>
        </Container>
    );
};

export default About;