import React, { useContext } from 'react';
import { Box, Button } from '@mui/material';
import UserName from '../textfield/UserName';
import Password from '../textfield/Password';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { UserContext } from '../../context/UserContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn, setSignIn } = useContext(UserContext);

  return (
    <Layout>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'70vh'}
      >
        {!signIn && (
          <>
            <UserName></UserName>
            <Password></Password>
          </>
        )}
        <Button
          variant='outlined'
          onClick={() => {
            if (!signIn) {
              setSignIn(true);
              navigate('/home');
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
