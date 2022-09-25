import React from 'react';
import { useState } from 'react';
import Layout from '../layout/Layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
    </SvgIcon>
  );
}

const CartPage = ({ user, signIn, shoppingCart, setShoppingCart }) => {
  const navigate = useNavigate();
  const productsArr = Object.keys(shoppingCart.products);
  const handleDeleteItem = (productKey) => {
    const copyShoppingCart = { ...shoppingCart };
    const updateCartItems = copyShoppingCart.items - 1;
    const copyProducts = { ...copyShoppingCart.products };
    const copyItem = { ...copyProducts[productKey] };
    const updateCount = copyItem.count - 1;
    const updateCopyItem = { ...copyItem, count: updateCount };
    const updateCopyProducts = {
      ...copyProducts,
      [productKey]: updateCopyItem,
    };
    const updateCopyShoppingCart = {
      copyShoppingCart,
      products: updateCopyProducts,
      items: updateCartItems,
    };
    setShoppingCart(updateCopyShoppingCart);
  };
  return (
    <Layout user={user} signIn={signIn} shoppingCart={shoppingCart}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        {productsArr.map((productKey, idx) => {
          const productCount = shoppingCart.products[productKey].count;
          return (
            <div key={`${idx}-${productKey}`}>
              {productCount > 0 && (
                <Box
                  mb={2}
                  sx={{ border: 'solid 2px grey', borderRadius: '16px' }}
                  display={'flex'}
                  flexDirection={'row'}
                  alignItems={'spaceBetween'}
                  padding='10px'
                  width={'80vw'}
                >
                  <Box padding='10px'>
                    <img
                      src={shoppingCart.products[productKey].image}
                      width={'50vw'}
                    ></img>
                  </Box>
                  <Box display={'flex'} flexDirection={'column'} padding='5px'>
                    <Box padding={'5px'}>
                      <div>{shoppingCart.products[productKey].title}</div>
                    </Box>
                    <div>${shoppingCart.products[productKey].price}</div>
                  </Box>
                  <Box
                    padding={'5px'}
                    display={'flex'}
                    justifyContent={'end'}
                    flexGrow={1}
                    alignItems={'center'}
                  >
                    <Box>x{shoppingCart.products[productKey].count}</Box>
                    <DeleteForeverIcon
                      sx={{ paddingLeft: '10%' }}
                      onClick={() => {
                        handleDeleteItem(productKey);
                      }}
                    ></DeleteForeverIcon>
                  </Box>
                </Box>
              )}
            </div>
          );
        })}

        <Box padding={'5px'}>
          <Button
            variant='contained'
            startIcon={<DeleteIcon />}
            onClick={() => {
              setShoppingCart({
                products: {},
                items: 0,
              });
            }}
          >
            Empty Cart
          </Button>
        </Box>
        <Box padding={'5px'}>
          <Button
            variant='contained'
            startIcon={<HomeIcon />}
            onClick={() => {
              navigate('/home');
            }}
          >
            Home Page
          </Button>
        </Box>
        {/* } */}
      </Box>
    </Layout>
  );
};

export default CartPage;
