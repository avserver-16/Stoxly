import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import heroImg from './assets/hero.png';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '95vh',
        backgroundColor: '#000', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        mt:'73px'
      }}
    >
      {/* Background image */}
      <Box
        component="img"
         src={heroImg}
        sx={{
          position: 'absolute',
          top: 15,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.9, // Optional: lower for better contrast with text
          zIndex: 1,
        }}
      />

      {/* Hero Content */}
      <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{color:'white'}}>
          Welcome to Stocker
        </Typography>

        <Typography variant="h5" color="white" paragraph >
          Discover our awesome features and offerings.
        </Typography>
        <Button variant="contained" sx={{color:'black',backgroundColor:'#9EFF00',margin:'10px',borderRadius:'16px'}} size="large">
          Indian Stocks
        </Button>
        <Button variant="contained" sx={{color:'#9EFF00',backgroundColor:'rgba(0,0,0,0.3)',margin:'10px' ,border: '2px solid #9EFF00',borderRadius:'16px'}} size="large">
         Foreign Stocks
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
