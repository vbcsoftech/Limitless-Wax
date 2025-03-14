import React from 'react';
import { Box, Typography } from '@mui/material';

const Avatar_Text = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Column layout for small screens, row for larger screens
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 4, // Space between items
        mt: 8
      }}
    >
      {/* First Item */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: "25%"
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: '#8C243F', // Circle color
            marginBottom: 2,
          }}
        />
        <Typography variant="h4" color="white" sx={{ fontWeight: 700 }}>
          Vaaaan
        </Typography>
        <Typography variant="h6" color="white" sx={{ fontWeight: 300 }}>
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
          width: "25%"
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            backgroundColor: '#8C243F', // Circle color
            marginBottom: 2,
          }}
        />
        <Typography variant="h4" color="white" sx={{ fontWeight: 700 }}>
          deraXyna
        </Typography>
        <Typography variant="h6" color="white" sx={{ fontWeight: 300 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue etiam auctor massa etiam.
        </Typography>
      </Box>
    </Box>
  );
};

export default Avatar_Text;