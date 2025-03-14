import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => (
  <Box 
    sx={{ 
      backgroundImage: "url('images/Rectangle - inverse.png')",
      p: 8,
      borderRadius: 4,
      mt: 4,
      textAlign: 'center',
      color: 'text.primary',
      boxShadow: (theme) => theme.shadows[4]
    }}
  >
    <Typography variant="h4" gutterBottom sx={{color: "white"}}>
      Allowing anyone to rent cpu or deposit wax and earn from renting to others.
    </Typography>
    <Typography variant="subtitle1" paragraph>
      The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax.
    </Typography>
    <Typography variant="subtitle1" paragraph>
      Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available.
      There is also a free system implemented but it has limits too.
    </Typography>
    <Typography variant="subtitle1" paragraph>
      Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. 
      There is also a free system implemented but it has limits too.
    </Typography>
  </Box>
);

export default HeroSection;
