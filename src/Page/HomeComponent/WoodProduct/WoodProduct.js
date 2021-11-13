import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OrderDetailPage from '../../OrderDetailPage/OrderDetailPage';
import ItemsForHomePage from '../Home/ItemsForHomePage';
import SingleProduct from './SingleProduct';

const WoodProduct = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://serene-bayou-12088.herokuapp.com/showItems')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        console.log(data)
      })
  }, [])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          products.map(product =>
            <>
              <SingleProduct
                key={product._id}
                product={product}
              ></SingleProduct>

            </>)
        }
      </Grid>


    </Box>

  );
};

export default WoodProduct;