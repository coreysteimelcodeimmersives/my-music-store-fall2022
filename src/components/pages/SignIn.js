import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import UserName from '../textfield/UserName';
import Password from '../textfield/Password';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useUserContext } from '../../context/UserContext';
import { sampleUserData } from '../../mockData';

const SignIn = () => {
  const navigate = useNavigate();
  const { user, signIn, signOut } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'70vh'}
      >
        {!user && (
          <>
            <UserName setEmail={setEmail}></UserName>
            <Password setPassword={setPassword}></Password>
          </>
        )}
        <Button
          variant='outlined'
          onClick={() => {
            if (!user) {
              signIn({ ...sampleUserData, email, password });
              navigate('/home');
              return;
            } else {
              signOut();
              return;
            }
          }}
        >
          {!user ? 'Log In' : 'Log Out'}
        </Button>
      </Box>
    </Layout>
  );
};

export default SignIn;
