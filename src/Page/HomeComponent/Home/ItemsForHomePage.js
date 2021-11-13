import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../WoodProduct/SingleProduct';

const ItemsForHomePage = () => {
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
          products.slice(0, 6).map(product => <SingleProduct
            key={product._id}
            product={product}
          ></SingleProduct>)
        }
      </Grid>

    </Box>
  );
};

export default ItemsForHomePage;