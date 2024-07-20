import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const HeroSection = ({ handleOpen }) => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h2" gutterBottom>Refer & Earn</Typography>
      <Typography variant="h5" paragraph>Refer a course to your friends and earn rewards!</Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>Refer Now</Button>
    </Container>
  );
};

export default HeroSection;
