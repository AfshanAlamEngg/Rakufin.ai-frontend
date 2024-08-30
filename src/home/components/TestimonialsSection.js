import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'John Doe', feedback: 'This platform has completely transformed how I manage my finances.', avatar: '/path/to/avatar1.jpg' },
    { name: 'Jane Smith', feedback: 'The insights I get are invaluable for planning my future.', avatar: '/path/to/avatar2.jpg' }
  ];

  return (
    <Box sx={{ padding: '50px 0', backgroundColor: '#e0f7fa' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>What Our Users Say</Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 60, height: 60, margin: '0 auto' }} />
              <Typography variant="h6" sx={{ marginTop: '20px' }}>{testimonial.name}</Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>{testimonial.feedback}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
