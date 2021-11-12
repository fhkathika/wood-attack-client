// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useHistory,
//     useParams,
//     useRouteMatch
//   } from "react-router-dom";
// import useAuth from '../hooks/useAuth';
// import { Button } from '@mui/material';
// import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
// import AddProduct from './AddProduct/AddProduct';
// import MakeAdmin from './MakeAdmin/MakeAdmin';
// import ManageProducts from './ManageProducts/ManageProducts';
// export default function ScrollableTabsButtonForce() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   let { path, url } = useRouteMatch();
//   const {user,LogOut,admin}=useAuth()
//   const history=useHistory()
//   return (
//     <Box sx={{ width: '100%' }}>
//     <Box xs={2} sm={4} md={4} sx={{ maxWidth: 800, bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons
//         allowScrollButtonsMobile
//         aria-label="scrollable force tabs example"
//       >
//             <Link style={{textDecoration:'none'}} to={`${url}`}><Tab label="dashboard"></Tab> </Link>

//             <Box>
//    {
//      admin && 
//    <Box>
      
//      <Link style={{textDecoration:'none'}} to={`${url}/addProduct`}><Tab label="Add Product"></Tab> </Link> 
//      <Link style={{textDecoration:'none'}} to={`${url}/makeAdmin`}><Tab label="Make Admin"> </Tab> </Link> 
//      <Link style={{textDecoration:'none'}} to={`${url}/manageProduct`}><Tab label="Manage Product"> </Tab> </Link>
//      {
//               user?.email?
//               <Button onClick={LogOut} color="inherit">Log Out</Button>
             
//               :
//               history.replace('/')
              
//           }
//    </Box> 
//    }
  
//    </Box>
       
//       </Tabs>
// </Box>
//       <Switch>
//         <Route exact path={path}>
//          <ManageAllOrder></ManageAllOrder>
//         </Route>
//         <Route path={`${path}/addProduct`}>
//         <AddProduct></AddProduct>
//         </Route>
//         <Route path={`${path}/manageProduct`}>
//         <ManageProducts></ManageProducts>
//         </Route>
//         <Route path={`${path}/makeAdmin`}>
//         <MakeAdmin></MakeAdmin>
//         </Route>
       
//       </Switch>
//     </Box>
//   );
// }
