import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Layout from '../layout/Layout';
import ProductDisplay from '../home/ProductDisplay';
import Axios from '../../utils/Axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    const fetchProducts = async () => {
      const response = await Axios.get('/get-products');
      setProducts(response.data.products);
    };
    fetchProducts();
  }, []);
  return (
    <Layout>
      <Box display='flex' flexDirection='column' alignItems='center'>
        {products.map((product, idx) => (
          <Box key={`${idx}-${product}`} mb={6} bgcolor='pink'>
            <ProductDisplay productData={product} />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
