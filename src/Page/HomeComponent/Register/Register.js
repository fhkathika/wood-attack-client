import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [regsiterData,setRegsiterData]=useState({})
    const { isLoading,registerUser,user,authError}=useAuth()
    const history=useHistory()
    const handleOnBlur=e=>{
        const field=e.target.name
        const value=e.target.value
        const newRegsiterData={...regsiterData}
        newRegsiterData[field]=value
        setRegsiterData(newRegsiterData)
        console.log(newRegsiterData)
        e.preventDefault()
    }
    const handleRegister=e=>{
        if(regsiterData.password!== regsiterData.password2)
        {
            alert('ypur password did not match')
        }
        registerUser(regsiterData.email,regsiterData.name,regsiterData.password,history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid  item xs={10} md={10}>
  <Typography sx={{ margin:"10px"}} variant="h4" gutterBottom component="div">
     Registration
      </Typography> 
  {!isLoading &&
<Box>
<form sx={{margin:"10px"}} style={{width:'auto'}} onSubmit={handleRegister}>
           <TextField sx={{width:"50%",margin:"10px"}}
            label="name"
            variant="outlined"
            name="name"
            type="text"
            onBlur={handleOnBlur} />  
           <TextField sx={{width:"75%",margin:"10px"}}
            label="email"
            variant="outlined"
            name="email"
            type="email"
            onBlur={handleOnBlur} />  
           <TextField sx={{width:"75%",margin:"10px"}}
            label="password"
            variant="outlined"
            name="password"
            type="password"
            onBlur={handleOnBlur} />  
           <TextField sx={{width:"75%",margin:"10px"}}
            label="re-type password"
            variant="outlined"
            name="password2"
            type="password"
            onBlur={handleOnBlur} />  
               <Button sx={{width:"50%",margin:"10px"}} type="submit" variant="contained">Register</Button>  
               </form> 
               <Link to='/login'>
               <Button variant="text">Already have an account? PLease login </Button>
               </Link>
</Box>
  
               }

               {
                   isLoading &&
                   <CircularProgress/>
               } 
              

              
  </Grid>
  
</Grid>
           
        </Container>
    );
};

export default Register;