import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';

import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({})
  console.log('product/.....', product)
  const addProductBgUrl = 'https://i.ibb.co/Mh515Lz/addprodut2.jpg'
  const addProductBg = {
    background: `url(${addProductBgUrl})`
  }
  const handleOnBlur = e => {
    const field = e.target.name
    const value = e.target.value
    const newProductData = { ...product }
    newProductData[field] = value
    setProduct(newProductData)
    console.log(newProductData)

  }
  const handleAddProduct = e => {
    fetch('https://serene-bayou-12088.herokuapp.com/addItems', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    e.preventDefault()
  }
  return (
    <Container   >
      <Grid sx={{ margin: '10px' }} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>

            <form style={addProductBg} onSubmit={handleAddProduct}>
              <Typography className="style" sx={{ padding: '10px', margin: "10px", color: '#795548' }} variant="h4" gutterBottom component="div">
                Add New Product
              </Typography>
              <TextField
                style={{ width: '75%', margin: '10px' }}
                label="item name"
                variant="outlined"
                name="name"
                type="text"
                onBlur={handleOnBlur}
              />
              <TextField
                style={{ width: '75%', margin: '10px' }}
                label="describtion"
                variant="outlined"
                name="description"
                type="text"
                onBlur={handleOnBlur}
              />
              <TextField
                style={{ width: '75%', margin: '10px' }}
                label="price"
                variant="outlined"
                name="price"
                type="number"
                onBlur={handleOnBlur}
              />
              <TextField
                style={{ width: '75%', margin: '10px' }}
                label="enter image url"
                variant="outlined"
                name="image"
                type="text"
                onBlur={handleOnBlur}

              />
              <Button style={{ margin: '10px', backgroundColor: '#978574' }} type="submit" variant="contained">Add Product</Button>
            </form>
          </Paper>
        </Grid>

      </Grid>
    </Container>
  );
};

export default AddProduct;