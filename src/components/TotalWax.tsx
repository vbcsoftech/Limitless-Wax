import React from 'react';
import { Box, Typography } from '@mui/material';

const TotalWax: React.FC = () => {
  return (
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={{ xs: 3, md: 5 }} 
        justifyContent="center" 
        p={{ xs: 2, sm: 4, md: 6 }}
      >
        <Box 
          boxShadow="10px 10px 5px #00000026" 
          p={{ xs: 3, md: 4 }}
          borderRadius={5}
          width={{ xs: '100%', md: 'auto' }}
          bgcolor="#5C2736"
        >
          <Typography variant="h4" sx={{ mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
            517892.24469852
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' } }}>
            Total Wax in System
          </Typography>
        </Box>
        <Box 
          boxShadow="10px 10px 5px #00000026" 
          p={{ xs: 3, md: 4 }}
          borderRadius={5}
          width={{ xs: '100%', md: 'auto' }}
          bgcolor="#5C2736"
        >
          <Typography variant="h4" sx={{ mb: 1, fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
            517892.24469852
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "center", fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' } }}>
            Total Wax in System
          </Typography>
        </Box>
      </Box>
  );
};

export default TotalWax;