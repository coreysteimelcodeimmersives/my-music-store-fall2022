import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button } from '@mui/material';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

function ProductDisplay(props) {
  const { productData } = props;
  const handleAddToCart = (productData) => {
    const copyShoppingCart = { ...props.shoppingCart };
    const updateCartItems = copyShoppingCart.items + 1;
    const copyProducts = { ...copyShoppingCart.products };
    if (productData.id in copyProducts) {
      const copyItem = { ...copyProducts[productData.id] };
      const updateCount = copyItem.count + 1;
      const updateCopyItem = { ...copyItem, count: updateCount };
      const updateCopyProducts = {
        ...copyProducts,
        [productData.id]: updateCopyItem,
      };
      const updateCopyShoppingCart = {
        ...copyShoppingCart,
        products: updateCopyProducts,
        items: updateCartItems,
      };
      props.setShoppingCart(updateCopyShoppingCart);
    } else {
      const newProduct = { ...productData, count: 1 };
      const updateCopyProducts = {
        ...copyProducts,
        [productData.id]: newProduct,
      };
      const updateCopyShoppingCart = {
        ...copyShoppingCart,
        products: updateCopyProducts,
        items: updateCartItems,
      };
      props.setShoppingCart(updateCopyShoppingCart);
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={productData.title} subheader={productData.brand} />
      <CardMedia
        component='img'
        height='294'
        image={productData.image}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display='flex' justifyContent='space-between' width={1}>
          <Button
            onClick={() => {
              handleAddToCart(productData);
            }}
          >
            Add to cart
          </Button>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
