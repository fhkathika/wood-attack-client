import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Header = () => {
   const {user,LogOut}=useAuth()
  //  console.log('userdetail.....',user)
    return (
 
              <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:'#251C14'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         Wood Art
          </Typography>
          <Link style={{textDecoration:'none',color:'wheat'}} to='/'>
          <Button color="inherit">Home</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'wheat'}}to='/explore'>
          <Button color="inherit">Explore Items</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'wheat'}}to='/dashBoard'>
          <Button color="inherit">DashBoard</Button>
          </Link>
          {
            user?.email?
            <Button onClick={LogOut} color="inherit">Log Out</Button> :
            <Link style={{textDecoration:'none',color:'wheat'}} to='/login'>
            <Button color="inherit">Login</Button>
            </Link>
          }
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {user?.displayName}
          </Typography>
         
        </Toolbar>
      </AppBar>
    </Box>

 
    );
};

export default Header;