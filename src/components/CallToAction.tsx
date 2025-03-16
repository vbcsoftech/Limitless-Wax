import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CallToAction = () => (  
  <Box
    mt={{ xs: 4, sm: 5, md: 6 }}
    display="flex" 
    flexDirection={{ xs: 'column', sm: 'row' }}
    justifyContent="space-between"
    bgcolor="#331E22CC"
    p={{ xs: 3, sm: 4 }}
    borderRadius={{ xs: 3, sm: 4, md: 6 }}
    alignItems="center"
    gap={{ xs: 3, sm: 4 }}
    mx={{ xs: 2, sm: 0 }}
  >
    <Typography 
      variant="h5" 
      sx={{
        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
        textAlign: { xs: 'center', sm: 'left' },
        maxWidth: { xs: '100%', sm: '60%' },
        color: "#ffffff"
      }}
    >
      Stay up to date with Limitless WAX
    </Typography>
    <Button 
      variant="contained" 
      size="large" 
      sx={{
        background: "#882140",
        borderRadius: "0",
        color: "white",
        py: { xs: 1, sm: 1.5 },
        px: { xs: 3, sm: 4 },
        width: { xs: '100%', sm: 'auto' },
        textTransform: 'none',
        '&:hover': {
          background: "#9C2749"
        }
      }}
    >
      Join Community
    </Button>
  </Box>
);

export default CallToAction;
