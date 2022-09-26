import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      bgcolor='#17637B'
      p='40px'
      position={'fixed'}
      top={'90vh'}
      width={'100%'}
    >
      <Typography fontWeight='bold' align='center' color='white'>
        MyMusicStore.com
      </Typography>
    </Box>
  );
}

export default Footer;
