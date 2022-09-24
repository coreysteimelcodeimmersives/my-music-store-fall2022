import { Box } from '@mui/material';
import { productList } from '../../mockData';
import Layout from '../layout/Layout';
import ProductDisplay from '../ProductDisplay';

function HomePage({ user, signIn, shoppingCart, setShoppingCart }) {
  console.log('sign in ', signIn);
  return (
    <Layout user={user} signIn={signIn}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        {productList.map((product, idx) => (
          <Box key={`${idx}-${product}`} mb={6} bgcolor='pink'>
            <ProductDisplay
              productData={product}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          </Box>
        ))}
      </Box>
    </Layout>
  );
}

export default HomePage;
