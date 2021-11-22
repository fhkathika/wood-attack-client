import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Carousel } from '@trendyol-js/react-carousel';
import SingleReview from './SingleReview';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './SingleShowReview.css'
const ShowReview = () => {
  const [showReviews, setShowReviews] = useState([])
  // get all reviews
  useEffect(() => {
    fetch('https://serene-bayou-12088.herokuapp.com/getAllreviews')
      .then(res => res.json())
      .then(data => {
        console.log('getAllreviews......', data)
        setShowReviews(data)
      })
  }, [])
  var settings = {
    dots: true
  };
  const bgUrl = 'https://i.ibb.co/0j5VZ4K/add-Product.jpg'
  const Bg = {

    background: `url(${bgUrl})`
  }
  return (

    <Container sx={{marginBottom:'7%'}} style={Bg}>
      <h1 style={{ color: 'wheat' }}>Reviews</h1>
      <Slider {...settings}>
        {
          showReviews.map(review =>
            <Container style={{ margin: '10%' }}>
              {/* reviewValue,userName,userEmail, */}
              <Card style={{ width: 'auto', margin: '5%', background: '#E3D1C1' }} sx={{ minWidth: 275 }}>
                <CardContent style={{ color: '#251C14' }}>
                  <Typography sx={{ fontSize: 25 }} style={{ color: '#4A3828' }} gutterBottom>
                    {review.userName}
                  </Typography>

                  <Typography variant="h6" >
                    {review.reviewValue}

                  </Typography>
                </CardContent>

              </Card>
            </Container>)
        }


      </Slider>
    </Container>
  );
};

export default ShowReview;