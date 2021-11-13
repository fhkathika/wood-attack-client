import { Container, Paper, TextField, InputBase, Button } from '@mui/material';
import { margin } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth'
import './OrderDetailPage.css'
const OrderDetailPage = () => {
  const [order, setOrder] = useState([])
  console.log('order....', order)
  const { register, handleSubmit, reset } = useForm();
  // const [orderDetail,setOrderDetail]=useState({})
  const { user } = useAuth()
  const { id } = useParams()
  const bgUrl = 'https://i.ibb.co/W3hKd4s/orderform.jpg'

  useEffect(() => {
    fetch(`https://serene-bayou-12088.herokuapp.com/orderDetail/${id}`)
      .then(res => res.json())
      .then(data => {
        setOrder(data)
        reset(data)
        console.log(data)
      }
      )
  }, [reset])

  const onSubmit = ({ _id, description, ...rest }) => {
    console.log('rest data....', rest)
    rest.status = 'pending'

    ///////send data into database//////////////
    fetch('https://serene-bayou-12088.herokuapp.com/ordersend', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(rest)
    })
      .then(res => res.json())
      .then(restData => {
        if (restData.insertedId) {
          reset(restData)
          reset()
          console.log(restData)
        }

      })
  }

  const formBg = {

    background: `url(${bgUrl})`
  }
  return (
    <Container>
      <Paper elevation={3} style={{ width: 'auto' }}>
        <form style={formBg} onSubmit={handleSubmit(onSubmit)}>
          <h1 className="style" sx={{ padding: '10px', margin: "10px", color: '#795548' }}>Order Detail</h1>
          <InputBase sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }}
            {...register("displayName")}
            defaultValue={user?.displayName}
            type="text" />
          <InputBase
            sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }}
            defaultValue={user?.email}
            {...register("email")} />
          <InputBase
            sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }}
            defaultValue={order?.name} {...register("name")} />

          <InputBase
            sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }}
            defaultValue={order?.price}
            {...register("price")} />

          <InputBase sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }} placeholder=" enter address"  {...register("address")} />


          <InputBase sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }} type="string" placeholder="contact number" {...register("contactnumber")} />






          <InputBase sx={{ width: "50%", margin: "10px", color: '#382A1E', border: '2px solid #382A1E', borderRadius: '5px' }} type="number" placeholder="quantity" {...register("quantity")} />



          <br />
          <Button style={{ backgroundColor: '#382A1E', width: '25%', margin: '2%' }} variant="contained" type="submit" >Confirm Order</Button>
        </form>

      </Paper>
    </Container>
  );
};

export default OrderDetailPage;