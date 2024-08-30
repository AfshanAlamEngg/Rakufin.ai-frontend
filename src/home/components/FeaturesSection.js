import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { AccountBalance, TrendingUp, School } from '@mui/icons-material';

const FeaturesSection = () => {
  const features = [
    { icon: <AccountBalance />, title: 'Finance Management', description: 'Manage your finances efficiently.' },
    { icon: <TrendingUp />, title: 'Portfolio Management', description: 'Track and optimize your investments.' },
    { icon: <School />, title: 'Learning Resources', description: 'Access educational content to improve your skills.' }
  ];

  return (
    <Box sx={{ padding: '50px 0' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>Features</Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              {feature.icon}
              <Typography variant="h6" sx={{ marginTop: '20px' }}>{feature.title}</Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>{feature.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
