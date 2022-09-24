import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import Layout from '../layout/Layout';

const CartPage = ({ shoppingCart }) => {
  return (
    <Layout user={user} signIn={signIn}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
      ></Box>
    </Layout>
  );
};

export default CartPage;
