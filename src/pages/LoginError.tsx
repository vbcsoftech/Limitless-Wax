import React from 'react';
import { Box, Typography, useMediaQuery, Theme, Button } from '@mui/material';

const LoginError: React.FC = () => {
  const isSmallScreen: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box mt={3} textAlign="center" display="flex" justifyContent="center" >
      <Box width="50%" display="flex" flexDirection="column" gap={6} mb={12}>
        <Box display="flex" width="100%" justifyContent="center">
          <img src="images/side1 1.png" alt="Error" width="100%" />
        </Box>
        
        <Typography variant={isSmallScreen ? "h6" : "h4"} sx={{color: "white", fontWeight: "bold"}} gutterBottom>
        Please log in to to see this
        feature in LimitlessWAX.
        </Typography>
        <Box display="flex" justifyContent="center">        
          <Button 
            variant='outlined'
            sx={(theme) => ({ 
              color: theme.palette.text.primary,
              borderColor: theme.palette.text.primary,
              '&:hover': {
                borderColor: theme.palette.text.secondary,
              },
              px:4
            })}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginError;