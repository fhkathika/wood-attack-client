import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const { authError, isLoading } = useAuth()
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

    );
};

export default MakeAdmin;