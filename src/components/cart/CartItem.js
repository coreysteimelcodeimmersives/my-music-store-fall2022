import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

const CartItem = ({ productKey }) => {
  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext);
  const handleDeleteItem = (productKey) => {
    const copyShoppingCart = { ...shoppingCart };
    const updateCartItems = copyShoppingCart.items - 1;
    const copyProducts = { ...copyShoppingCart.products };
    const copyItem = { ...copyProducts[productKey] };
    const updateCount = copyItem.count - 1;
    const updateTotal = updateCount * copyItem.price;
    const updateCopyItem = {
      ...copyItem,
      count: updateCount,
      total: updateTotal,
    };
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
        <img src={shoppingCart.products[productKey].image} width={'50vw'}></img>
      </Box>
      <Box display={'flex'} flexDirection={'column'} padding='5px'>
        <Box padding={'5px'}>
          <div>{shoppingCart.products[productKey].title}</div>
        </Box>
        <div>${shoppingCart.products[productKey].total}</div>
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
  );
};

export default CartItem;
