import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#004d40', color: 'white' }}>
      <Typography variant="h2">Welcome to Rakufin.Ai</Typography>
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Manage your finances with ease.</Typography>
      <Button variant="contained" color="primary" sx={{ marginTop: '30px' }}>Get Started</Button>
    </Box>
  );
};

export default HeroSection;
