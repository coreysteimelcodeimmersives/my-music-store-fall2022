import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import UserName from '../textfield/UserName';
import Password from '../textfield/Password';
import { useNavigate } from 'react-router-dom';
import Layout from '../layout/Layout';
import { sampleUserData } from '../../mockData';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../../redux-state/userSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
              dispatch(
                signIn({
                  ...sampleUserData,
                  email: email,
                  password: password,
                })
              );
              navigate('/home');
              return;
            } else {
              dispatch(signOut());
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
