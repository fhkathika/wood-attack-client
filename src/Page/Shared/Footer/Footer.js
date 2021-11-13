import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TwitterIcon from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
const Footer = () => {
    return (
        <Box  sx={{padding:'20px', backgroundColor:'#251C14'}}>
  <BottomNavigation
   sx={{ backgroundColor:'#251C14'}}
     showLabels
   >

<Typography style={{color:'#CFAF92',marginRight:'2%',marginLeft:'0'}} variant="h4"gutterBottom component="div" >
       Wood Art
      </Typography>
    
     
     <BottomNavigationAction
        style={{color:'#C8A382'}}
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon style={{color:'#F1E8E0'}} />}
      />
      <BottomNavigationAction
      style={{color:'#C8A382'}}
        label="Instagram"
        value="nearby"
        icon={<InstagramIcon style={{color:'#F1E8E0'}} />}
      />
      <BottomNavigationAction
         style={{color:'#C8A382'}} 
         label="Twitter" value="folder" icon={<TwitterIcon style={{color:'#F1E8E0'}} />} />
      <BottomNavigationAction 
         style={{color:'#C8A382'}}
      label="Facebook" value="folder" icon={<Facebook style={{color:'#F1E8E0'}}/>} />
   
      
   </BottomNavigation>
   <p style={{color:'#CFAF92'}} >In a forest of a hundred thousand trees, no two leaves are alike. And no two journeys along the same path are alike.</p>
   <small style={{color:'#CFAF92'}}  >@copyright 2021</small>

   </Box>

  
    );
};

export default Footer;