import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, Container } from '@mui/material';

export default function MyOrders() {
  const theme = useTheme();
  const { user } = useAuth()
  const [myOrders, setMyOrders] = useState([])
  const handleDeleteMyOrder = id => {
    const proceed = window.confirm('are you sure? you want to delete?')
    if (proceed) {
      fetch(`https://serene-bayou-12088.herokuapp.com/deleteMyOrder/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('delete Successfully')
            const remainingOrder = myOrders.filter(order => order._id !== id)
            setMyOrders(remainingOrder)
          }
        })
    }

  }
  useEffect(() => {
    fetch(`https://serene-bayou-12088.herokuapp.com/myOrders/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyOrders(data)
        console.log(data)
      })
  }, [user?.email])
  return (
    <div>
      {

        myOrders.map(myorder => <Container style={{ margin: '5%' }}>
          <Card sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={myorder.image}
              alt="Wood Art Product"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {myorder.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Price: {myorder.price}
                </Typography>
              </CardContent>

            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              {myorder.status}
            </Box>
            <Button onClick={() => handleDeleteMyOrder(myorder._id)} style={{ height: '50px' }} variant="outlined">Cancel Order</Button>

          </Card>
        </Container>)

      }
    </div>

  );
}
