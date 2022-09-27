import React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { UserContext } from '../../context/UserContext';

export default function Password() {
  const [password, setPassword] = useState({ password: '' });
  const { user, setUser } = useContext(UserContext);

  const handleChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
    setUser({ ...user, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setPassword({
      ...password,
      showPassword: !password.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', margin: '1%' }}>
      <div>
        <FormControl
          variant='outlined'
          // sx={{ width: '30vw' }}
        >
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={password.showPassword ? 'text' : 'password'}
            value={password.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {password.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>
      </div>
    </Box>
  );
}
