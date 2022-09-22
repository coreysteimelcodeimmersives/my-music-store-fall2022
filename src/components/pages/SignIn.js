import React from 'react';
import UserName from '../textfield/UserName';
import Password from '../textfield/Password';
import { Box, Button } from '@mui/material';
import Layout from '../layout/Layout';

function SignIn() {
  return (
    <Layout>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <UserName></UserName>
        <Password></Password>
        <Button variant='outlined'>Log In</Button>
      </Box>
    </Layout>
  );
}

export default SignIn;
