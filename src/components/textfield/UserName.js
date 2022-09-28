import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useUserContext } from '../../context/UserContext';

const UserName = () => {
  const { user, setUser } = useUserContext();
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '1%',
      }}
    >
      <TextField
        id='input-with-icon-textfield'
        label='Email'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        // sx={{ width: '50vw' }}
        onChange={(e) => {
          const email = e.target.value;
          setUser({ ...user, email });
        }}
      />
    </Box>
  );
};

export default UserName;
