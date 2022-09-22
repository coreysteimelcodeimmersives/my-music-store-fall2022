import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserName = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '1%',
      }}
    >
      <TextField
        id='input-with-icon-textfield'
        label='Username'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant='outlined'
        sx={{ width: '30vw' }}
      />
    </Box>
  );
};

export default UserName;
