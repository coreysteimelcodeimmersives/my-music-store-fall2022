import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Skeleton, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Layout from '../layout/Layout';
import Axios from '../../utils/Axios';

const CreateProductsPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [error, setError] = useState('');
  const [productData, setProductData] = useState({
    title: '',
    description: '',
    brand: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
      return;
    }
    if (!user.isAdmin) {
      navigate('/');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('/create-product', {
        productData: { ...productData, price: Number(productData.price) },
      });
      setError('');
      navigate('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Layout>
      <form action='submit' onSubmit={handleSubmit}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          height={'70vh'}
        >
          <TextField
            sx={{ margin: '3%' }}
            id='outlined-basic-firstName'
            label='Title'
            variant='outlined'
            onChange={(e) => {
              setProductData({ ...productData, title: e.target.value });
            }}
            required
          />
          <TextField
            sx={{ margin: '3%' }}
            id='outlined-basic-firstName'
            label='Description'
            variant='outlined'
            onChange={(e) => {
              setProductData({ ...productData, description: e.target.value });
            }}
            required
          />
          <TextField
            sx={{ margin: '3%' }}
            id='outlined-basic-firstName'
            label='Brand'
            variant='outlined'
            onChange={(e) => {
              setProductData({ ...productData, brand: e.target.value });
            }}
            required
          />
          <TextField
            sx={{ margin: '3%' }}
            id='outlined-basic-firstName'
            label='Price'
            variant='outlined'
            type='number'
            onChange={(e) => {
              setProductData({ ...productData, price: e.target.value });
            }}
            required
          />
          <TextField
            sx={{ margin: '3%' }}
            id='outlined-basic-firstName'
            label='Image'
            variant='outlined'
            onChange={(e) => {
              setProductData({ ...productData, image: e.target.value });
            }}
            required
          />
          <Button variant='outlined' type='form'>
            Submit
          </Button>
          <Box sx={{ margin: '5%' }}>
            <Typography sx={{ color: 'red' }}>{error}</Typography>
          </Box>
        </Box>
      </form>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={'-15%'}
      >
        {productData.image && (
          <img
            src={productData.image}
            alt={'product'}
            style={{ width: '200px', height: '200px', padding: '10%' }}
          ></img>
        )}
      </Box>
    </Layout>
  );
};

export default CreateProductsPage;
