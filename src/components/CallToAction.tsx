import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CallToAction = () => (  
  <Box
    mt={6} 
    display="flex" 
    justifyContent="space-between"
    bgcolor="#331E22CC"
    p={4}
    borderRadius={6}
    alignItems="center"
  >
    <Typography variant="h5">Stay up to date with Limitless WAX</Typography>
    <Button variant="contained" size="large" sx={{background:"#882140", borderRadius: "0", color: "white", border: "1px solid white"}}>
      Join Community
    </Button>
  </Box>
);

export default CallToAction;
