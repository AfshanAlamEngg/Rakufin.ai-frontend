import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const ContactSection = () => {
  return (
    <Box sx={{ padding: '50px 0' }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: '40px' }}>Contact Us</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography variant="body2" sx={{ marginTop: '20px' }}>Email: contact@yourcompany.com</Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>Phone: +123 456 7890</Typography>
          <Typography variant="body2" sx={{ marginTop: '10px' }}>Address: 123 Your Street, Your City, Your Country</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" />
          <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
          <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>Send Message</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
