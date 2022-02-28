import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import {Link} from 'react-router-dom'
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './Footer.css'
const Footer = () => {
    return (
      <footer style={{position:'static'}}>
      <Box color='white' px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor='#251C14' left='0' bottom='0' right='0' >
          <Container maxWidth="lg">
<Grid container spacing={5} >
<Grid item x={12} sm={4}>
   <Box borderBottom={1}>Help</Box>
   <Box ><Link className='link' href='/' >Contact</Link></Box>
   <Box ><Link className='link' href='/' color='white'>Support</Link></Box>
   <Box ><Link className='link' href='/' color='white'>Privacy policy</Link></Box>
</Grid>
<Grid item x={12} sm={4}>
   <Box borderBottom={1}>Account</Box>
   <Box  ><Link className='link'  href='/' >Login</Link></Box>
   <Box ><Link className='link' href='/' color='white'>Register</Link></Box>
   <Box ><Link className='link' href='/' color='white'>Messages</Link></Box>
</Grid>
<Grid item x={12} sm={4}>
   <Box borderBottom={1}>Messages</Box>
   <Box ><Link className='link' href='/' color='white'>History</Link></Box>
   <Box ><Link className='link' href='/' color='white'>Support</Link></Box>
   <Box ><Link className='link' href='/' color='white'>Privacy policy</Link></Box>
</Grid>
</Grid>
<Box textAlign='center' pt={{xs:5,sm:10}} pb={{xs:5,sm:0}}>
{<Facebook  style={{color:'#F1E8E0', margin:'10px'}}/>}
{<TwitterIcon  style={{color:'#F1E8E0', margin:'10px'}}/>}
{<InstagramIcon style={{color:'#F1E8E0', margin:'10px'}}/>}
</Box>
<Box textAlign='center' pt={{xs:5,sm:4}} pb={{xs:5,sm:0}}>
Ecommerce Site @copyright {new Date().getFullYear()}
</Box>
          </Container>
      </Box>
      </footer>

  
    );
};

export default Footer;