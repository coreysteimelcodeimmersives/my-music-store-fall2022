import React from 'react';
import Layout from '../layout/Layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart/CartItem';

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
  return (
    <Layout user={user} signIn={signIn} shoppingCart={shoppingCart}>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        {productsArr.map((productKey, idx) => {
          const productCount = shoppingCart.products[productKey].count;
          return (
            <div key={`${idx}-${productKey}`}>
              {productCount > 0 && (
                <CartItem
                  shoppingCart={shoppingCart}
                  setShoppingCart={setShoppingCart}
                  productKey={productKey}
                ></CartItem>
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
