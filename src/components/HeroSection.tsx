import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => (
  <Box 
    sx={{ 
      backgroundImage: "url('images/Rectangle - inverse.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      p: { xs: 3, sm: 5, md: 8 },
      borderRadius: { xs: 2, sm: 3, md: 4 },
      mt: { xs: 2, sm: 3, md: 4 },
      textAlign: 'center',
      color: 'text.primary',
      boxShadow: (theme) => theme.shadows[4],
      mx: { xs: 2, sm: 3, md: 0 }
    }}
  >
    <Typography 
      variant="h4" 
      gutterBottom
      sx={{
        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
        lineHeight: { xs: 1.3, md: 1.4 },
        mb: { xs: 2, sm: 3 }
      }}
    >
      Allowing anyone to rent cpu or deposit wax and earn from renting to others.
    </Typography>
    <Typography 
      variant="subtitle1" 
      paragraph
      sx={{
        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.6,
        mb: { xs: 2, md: 3 },
        maxWidth: { sm: '90%', md: '80%' },
        mx: 'auto'
      }}
    >
      The price is dynamically set between a 1% and 10% fee and it changes everytime someone deposits/withdraws/rents/returns wax.
    </Typography>
    <Typography 
      variant="subtitle1" 
      paragraph
      sx={{
        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.6,
        mb: { xs: 2, md: 3 },
        maxWidth: { sm: '90%', md: '80%' },
        mx: 'auto'
      }}
    >
      Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available.
      There is also a free system implemented but it has limits too.
    </Typography>
    <Typography 
      variant="subtitle1" 
      paragraph
      sx={{
        fontSize: { xs: '0.875rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.6,
        mb: { xs: 1, md: 2 },
        maxWidth: { sm: '90%', md: '80%' },
        mx: 'auto'
      }}
    >
      Users are limited to how much they can rent in a single transaction but can make multiple requests as long as there is wax available. 
      There is also a free system implemented but it has limits too.
    </Typography>
  </Box>
);

export default HeroSection;
