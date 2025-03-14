import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Partners = () => (
  <Box sx={{py: '3rem' }}>
    <Typography variant="h6" component="h3" textAlign="center">
      Partners
    </Typography>
    <Grid container mt={3} spacing={5} justifyContent="center">
      {[...Array(5)].map((_, index) => (
        <Grid item key={index}>
          <Box sx={{
            width: '174px',
          }} >
            <img src="images/image 2.png" style={{width: "100%"}} />
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Partners;
