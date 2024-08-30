import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ padding: '20px 0', backgroundColor: '#004d40', color: 'white', textAlign: 'center' }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item>
          <Link href="#" color="inherit">Privacy Policy</Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">Terms of Service</Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">Contact Us</Link>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ marginTop: '20px' }}>© 2024 Your Company. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
