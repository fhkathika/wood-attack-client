import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../Route/AdminRoute';
import Payment from './MyOrders_Review/Payment';
import { Reviews } from '@mui/icons-material';
import MyOrders from './MyOrders_Review/MyOrders';
import Review from '../HomeComponent/Review/Review';
import './DashboardDemo.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { Button, Grid } from '@mui/material';

const drawerWidth = 240;

function DashboardDemo(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const {user,LogOut,admin}=useAuth()
  const history=useHistory()
  const drawer = (
    <div>
      <Toolbar />
      <ul>
      <li>
          <Link   className="link"  to='/'>Home</Link> 
        
          </li>
          <li>
          <Link   className="link"  to={`${url}`}>Dashboad</Link> 
          </li>
      </ul>
      <Divider />
  
       
   <Box>
   {
     admin && 
   <Box>
      
      <ul>
     
        
     <li>
          <Link   className="link" to={`${url}/addProduct`}>Add Product</Link> 
         
        </li>
     <li>
        
          {/* <Link  className="link"to={`${url}/makeadminmodal`}>Make admin modal</Link>  */}
         
        </li>
        <li>
        <Link  className="link"to={`${url}/makeAdmin`}>Make Admin</Link> 
        </li>
        <li>
          <Link  className="link"to={`${url}/manageProduct`}>Manage Product</Link> 
        </li>
        
     </ul>
    
   </Box> 
   }
   {
     !admin && 
     <Box>
         <ul>
      
        
         <li>
          <Link  className="link"to={`${url}/review`}>Review</Link> 
          <Link  className="link"to={`${url}/payment`}>Make Payment</Link> 
          
        </li>
         </ul>
    
     </Box>
   }
   
  
   </Box>
  
     
      <Divider />
      {
              user?.email?
              <ul>
                  <li>
                  <Button onClick={LogOut} variant="contained" >Log Out</Button>
                  </li>
              </ul>
             
             
              :
              history.replace('/')
              
    }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      style={{display:'none'}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box className='bg'
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
       
        <Box sx={{ flexGrow: 2 }} >
<Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
 
  <Switch>
        {
admin &&
<Box>
  <Route exact path={path}>
<ManageAllOrder></ManageAllOrder>
</Route>
 <AdminRoute  path={`${path}/addProduct`}>
 <AddProduct></AddProduct>
 </AdminRoute>

 <AdminRoute  path={`${path}/manageProduct`}>
 <ManageProducts></ManageProducts>
 </AdminRoute>

 <AdminRoute  path={`${path}/makeAdmin`}>
 <MakeAdmin></MakeAdmin>
 </AdminRoute>
 </Box>
    }
    {
      !admin &&
      <Box> 
      <Route exact path={path}>
      <MyOrders></MyOrders>
     </Route>
    
     <Route  path={`${path}/review`}>
     <Review></Review>
     </Route>
     <Route  path={`${path}/payment`}>
     <Payment></Payment>
     </Route>
     </Box>
    }
    </Switch>

 
 
</Grid>
</Box>
      </Box>
    </Box>
  );
}

DashboardDemo.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardDemo;