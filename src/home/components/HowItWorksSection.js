import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const HowItWorksSection = () => {
  const steps = [
    { step: 1, title: 'Sign Up', description: 'Create an account to get started.' },
    { step: 2, title: 'Link Accounts', description: 'Connect your financial accounts.' },
    { step: 3, title: 'Set Goals', description: 'Define your financial goals.' },
    { step: 4, title: 'Track Progress', description: 'Monitor your progress over time.' }
  ];

  return (
    <Box sx={{ padding: '50px 0', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>How It Works</Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">Step {step.step}</Typography>
                <Typography variant="h6" sx={{ marginTop: '10px' }}>{step.title}</Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
