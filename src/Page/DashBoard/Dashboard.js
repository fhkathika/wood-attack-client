import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import AddProduct from './AddProduct/AddProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from '../Route/AdminRoute';
import Payment from './MyOrders_Review/Payment';
import { Reviews } from '@mui/icons-material';
import MyOrders from './MyOrders_Review/MyOrders';
import Review from '../HomeComponent/Review/Review';
export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let { path, url } = useRouteMatch();
  const {user,LogOut,admin}=useAuth()
  const history=useHistory()
   const bgUrl2='https://i.ibb.co/RNDdLKf/bg2.jpg'
   const bg={
  
    background:`url(${bgUrl2})`,
    backgroundRepeat: 'no-repeat',

   

    
}
  return (
    <Box sx={{ width: '100%' }}>
    <Box xs={6} sm={6} md={4} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
            <Link style={{textDecoration:'none'}} to={`${url}`}><Tab label="dashboard"></Tab> </Link>

            <Box>
   {
     admin && 
   <Box>
      
     <Link style={{textDecoration:'none'}} to={`${url}/addProduct`}><Tab label="Add Product"></Tab> </Link> 
     <Link style={{textDecoration:'none'}} to={`${url}/makeAdmin`}><Tab label="Make Admin"> </Tab> </Link> 
     <Link style={{textDecoration:'none'}} to={`${url}/manageProduct`}><Tab label="Manage Product"> </Tab> </Link>
    
   </Box> 
   }
   {
     !admin && 
     <Box>
        
     <Link style={{textDecoration:'none'}} to={`${url}/review`}><Tab label="Review"> </Tab> </Link> 
     <Link style={{textDecoration:'none'}} to={`${url}/payment`}><Tab label="Payment"> </Tab> </Link>
     </Box>
   }
   
  
   </Box>
   {
              user?.email?
             <Button onClick={LogOut} variant="contained" >Log Out</Button>
             
              :
              history.replace('/')
              
    }
       
      </Tabs>
</Box>
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  <Grid xs={4} sm={4} md={8} >
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
  <Grid item xs={4} sm={4} md={4}>
 
  </Grid>
 
</Grid>
</Box>
      
    </Box>
  );
}
