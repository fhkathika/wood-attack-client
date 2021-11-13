import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import useAuth from '../../hooks/useAuth';
import './Review.css'
import { useForm } from 'react-hook-form';
const Review = () => {
    const { user } = useAuth()
    const [review, setReview] = useState([])
    const [reviewAlert, setReviewAlert] = useState(false)
    // const { register, handleSubmit,reset } = useForm();
    const bg = 'https://i.ibb.co/0h2sGBn/review.jpg'
    const formbg = {
        background: `url(${bg})`
    }
    const handleChange = (e) => {


        const reviewValue = e.target.value
        const userName = user?.displayName
        const userEmail = user?.email
        const formValue = { userName, userEmail, reviewValue }
        setReview(formValue)

        e.preventDefault()

    }
    const handleSubmit = (e) => {
        // const reviewemailValu=e.target.defaultValue

        console.log('customer review.........', review)
        fetch('https://serene-bayou-12088.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setReviewAlert(true)
                    setReview([])
                    console.log(data)
                }

            })
        e.preventDefault()

    }

    return (
        <Container style={{ margin: '5%' }}>
            <form className='input' style={formbg} onSubmit={handleSubmit}>
                <Typography className="style" sx={{ width: '50%', padding: '10px', margin: "auto", borderRadius: '10px', color: '##F1E8E0' }} variant="h4" gutterBottom component="div">
                    Give your opinion
                </Typography>
                <InputBase
                    // onChange={handleChange} 
                    style={{ width: '75%', border: '1px solid black', color: '#F1E8E0', margin: '10px' }}
                    defaultValue={user?.displayName}
                    name='name'
                    type='text'
                    variant="standard" />
                <InputBase
                    // onChange={handleChange} 
                    style={{ width: '75%', border: '1px solid black', color: '#F1E8E0', margin: '10px' }}
                    defaultValue={user?.email}
                    name='email'
                    type='email'
                    variant="standard" />

                <InputBase
                    onChange={handleChange}
                    name='comment'
                    type='text'
                    style={{ width: '75%', border: '3px solid #382A1E', borderRadius: '10px', margin: '10px' }}

                    label="Review Box"
                    multiline
                    rows={10}
                    placeholder="Give your opinion"
                />
                <Button type='submit'
                    sx={{ width: '25%', padding: '10px', margin: "10px", background: '#251C14', color: 'wheat' }}
                >
                    Submit Review
                </Button>
            </form>
            {
                reviewAlert && <Alert severity="success">review Submitted successfully</Alert>
            }
        </Container>
    );
};

export default Review;