import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
const Header = () => {
   const {user,LogOut}=useAuth()
  //  console.log('userdetail.....',user)
  const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

    return (

      <>
            
    <AppBar style={{backgroundColor:'#251C14'}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Woodcraft
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link style={{textDecoration:'none',color:'wheat'}} to='/'>
          <Button color="inherit">Home</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'wheat'}}to='/explore'>
          <Button color="inherit">Explore</Button>
          </Link>
          {/* <Link style={{textDecoration:'none',color:'wheat'}}to='/dashBoard'>
          <Button color="inherit">DashBoard</Button>
          </Link> */}
          <Link style={{textDecoration:'none',color:'wheat'}}to='/dashboardDemo'>
          <Button color="inherit">DashBoard</Button>
          </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Woodcraft
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link style={{textDecoration:'none',color:'wheat'}} to='/'>
          <Button color="inherit">Home</Button>
          </Link>
          <Link style={{textDecoration:'none',color:'wheat'}}to='/explore'>
          <Button color="inherit">Explore</Button>
          </Link>
          {/* <Link style={{textDecoration:'none',color:'wheat'}}to='/dashBoard'>
          <Button color="inherit">DashBoard</Button>
          </Link> */}
          <Link style={{textDecoration:'none',color:'wheat'}}to='/dashboardDemo'>
          <Button color="inherit">DashBoard</Button>
          </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          {
            user?.email?
            <Button onClick={LogOut} color="inherit">Log Out</Button> :
            <Link style={{textDecoration:'none',color:'wheat'}} to='/login'>
            <Button color="inherit">Login</Button>
            </Link>
          }
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 </>
    );
};

export default Header;