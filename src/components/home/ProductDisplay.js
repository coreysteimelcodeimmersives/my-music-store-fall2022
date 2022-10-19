import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';
import { addToCart } from '../../redux-state/shoppingCartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Axios from '../../utils/Axios';
import { signIn } from '../../redux-state/userSlice';

function ProductDisplay(props) {
  const dispatch = useDispatch();
  const { productData } = props;
  const user = useSelector((state) => state.user);
  const isFavorite = user.favorites.includes(productData.id);
  const handleFavoriteClick = async () => {
    const response = await Axios.post('/update-favorites', {
      productId: productData.id,
    });
    dispatch(signIn(response.data.user));
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
          {productData.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display='flex' justifyContent='space-between' width={1}>
          <Button
            onClick={() => {
              dispatch(addToCart(productData));
            }}
          >
            Add to cart
          </Button>
          <IconButton
            color={isFavorite ? 'error' : undefined}
            aria-label='add to favorites'
            onClick={handleFavoriteClick}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ProductDisplay;
