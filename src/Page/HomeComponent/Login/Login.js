import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box, margin } from '@mui/system';
import React, { useState } from 'react';
import { Link,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'
const Login = () => {
    const [loginData,setLoginData]=useState({})
    const { isLoading,logIn,LogOut,user,authError}=useAuth()
    const history=useHistory()
    const location=useLocation()
    const handleOnBlur=e=>{
        const field=e.target.name
        const value=e.target.value
        const newloginData={...loginData}
        newloginData[field]=value
        setLoginData(newloginData)
        console.log(newloginData)
        e.preventDefault()
    }
    const handleLogin=e=>{
      logIn(loginData.email,loginData.password,location,history)
      

        e.preventDefault()
    }
    return (
  <Container>
     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
  <Grid item xs={10} md={10}>
  <Typography className="style" sx={{ margin:"10px"}} variant="h4" gutterBottom component="div">
     PLease Log in
      </Typography> 
  {  !isLoading &&
    <form onSubmit={handleLogin} className="style" style={{width:'auto'}}>
    
              <TextField sx={{width:"75%", margin:"10px"}}
                label="email"
                variant="outlined"
                name="email"
                type="email"
                onBlur={handleOnBlur} />  
               <TextField sx={{width:"75%"}}
                label="password"
                variant="outlined"
                name="password"
                type="password"
                onBlur={handleOnBlur} />
                
                <Button sx={{width:"50%",margin:"10px"}} type="submit" variant="contained">Login</Button> 
                  </form>}
                  {
                    isLoading &&
                    <CircularProgress/>
                  } 
                  <Link className="style" to='/register'>
                  <Button variant="text">New to Wood Art? PLease Register  </Button>
                  </Link>
  </Grid>
 
</Grid>   
</Container>
    );
};

export default Login;