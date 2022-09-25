import React from 'react';
import { Box, Button } from '@mui/material';
import UserName from '../textfield/UserName';
import Password from '../textfield/Password';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';

const SignIn = ({ user, setUser, signIn, setSignIn, shoppingCart }) => {
  const navigate = useNavigate();

  return (
    <Layout user={user} signIn={signIn} shoppingCart={shoppingCart}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'70vh'}
      >
        {!signIn && (
          <>
            <UserName user={user} setUser={setUser}></UserName>
            <Password user={user} setUser={setUser}></Password>
          </>
        )}
        <Button
          variant='outlined'
          onClick={() => {
            if (!signIn) {
              setSignIn(true);
              navigate('/home');
              console.log(user);
              return;
            } else {
              setSignIn(false);
              return;
            }
          }}
        >
          {!signIn ? 'Log In' : 'Log Out'}
        </Button>
      </Box>
    </Layout>
  );
};

export default SignIn;
