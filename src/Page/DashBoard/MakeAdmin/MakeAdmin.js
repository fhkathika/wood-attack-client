import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
const MakeAdmin=()=> {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { authError, isLoading } = useAuth()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(e.target.value)
        e.preventDefault()
    }
    const handleAdmin = e => {
        const user = { email }

        fetch('https://serene-bayou-12088.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true)
                    setEmail('')

                    console.log(data)
                }


            })
        e.preventDefault()
    }

    return (
        <div>
          
   
    <Container >
            {!isLoading &&
                <>
                    <form style={{ margin: '10%' }} onSubmit={handleAdmin}>
                        <TextField
                            style={{ width: '50%' }}
                            label="enetr email "
                            variant="standard"
                            name="email"
                            onBlur={handleEmail} />
                        <br />
                        <Button style={{ margin: '5%' }} type="submit" variant="contained">Make Admin</Button>
                    </form>

                </>
            }
            {
                isLoading &&
                <CircularProgress />
            }
            {
                success &&
                <Alert severity="success">Admin  Successfully Added</Alert>
            }

        </Container>
        </div>
        

    );


}
export default MakeAdmin