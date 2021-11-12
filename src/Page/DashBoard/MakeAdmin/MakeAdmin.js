import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const { authError,isLoading}=useAuth()
    const handleEmail=e=>{
        setEmail(e.target.value)
        console.log(e.target.value)
        e.preventDefault() 
    }
    const handleAdmin=e=>{
      const  user={email}
     
      fetch('http://localhost:5000/users/admin',{
          method: 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data =>{
          if(data.modifiedCount){
         
                setSuccess(true)
                setEmail('')
           
              console.log(data)
          }
         
         
      })
e.preventDefault()
    }

    return (
        <Box>
  {!isLoading && 
  <>
  <form onSubmit={handleAdmin}>
  <TextField  label="Standard"
   variant="standard"
   name="email"
   onBlur={handleEmail} />
   <Button type="submit" variant="contained">Make Admin</Button>
</form>

</>
}
{
    isLoading && 
    <CircularProgress/>
}
{
!success && 
<Alert severity="success">Admin  Successfully Added</Alert>
}

        </Box>
   
    );
};

export default MakeAdmin;