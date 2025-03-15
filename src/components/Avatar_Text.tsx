import React from 'react';
import { Box, Typography } from '@mui/material';

const Avatar_Text = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: { xs: 6, md: 4 },
        mt: { xs: 4, sm: 6, md: 8 },
        px: { xs: 2, sm: 4 }
      }}
    >
      {/* First Item */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: { xs: '90%', sm: '70%', md: '25%' }
        }}
      >
        <Box
          sx={{
            width: { xs: 140, sm: 180, md: 200 },
            height: { xs: 140, sm: 180, md: 200 },
            borderRadius: '50%',
            backgroundColor: '#8C243F',
            marginBottom: { xs: 2, md: 3 },
          }}
        />
        <Typography 
          variant="h4" 
          color="white" 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            mb: { xs: 1, md: 2 }
          }}
        >
          Vaaaan
        </Typography>
        <Typography 
          variant="h6" 
          color="white" 
          sx={{ 
            fontWeight: 300,
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            lineHeight: 1.5,
            maxWidth: { xs: '280px', sm: '400px', md: 'none' }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam.
        </Typography>
      </Box>

      {/* Second Item */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: { xs: '90%', sm: '70%', md: '25%' }
        }}
      >
        <Box
          sx={{
            width: { xs: 140, sm: 180, md: 200 },
            height: { xs: 140, sm: 180, md: 200 },
            borderRadius: '50%',
            backgroundColor: '#8C243F',
            marginBottom: { xs: 2, md: 3 },
          }}
        />
        <Typography 
          variant="h4" 
          color="white" 
          sx={{ 
            fontWeight: 700,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
            mb: { xs: 1, md: 2 }
          }}
        >
          deraXyna
        </Typography>
        <Typography 
          variant="h6" 
          color="white" 
          sx={{ 
            fontWeight: 300,
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
            lineHeight: 1.5,
            maxWidth: { xs: '280px', sm: '400px', md: 'none' }
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam.
        </Typography>
      </Box>
    </Box>
  );
};

export default Avatar_Text;