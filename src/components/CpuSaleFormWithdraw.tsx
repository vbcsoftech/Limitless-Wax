import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const CpuSaleFormWithdraw: React.FC = () => {
  return (
    <Box width={{ xs: '100%', sm: '60%', color: "#EDEDED" }}>
      <Box>
        <Typography variant='h6'>Wax Balance</Typography>
        <Typography variant='subtitle1' sx={{fontWeight: "bold"}}>11.3491 WAX</Typography>
      </Box>
      <>
        <Typography variant="body2">Amount to withdraw</Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          my: 1
        }}>
          <TextField
            margin="none"
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ 
              input: { 
                color: '#fff',
                height: '0.75em',
                padding: '8px 12px'
              },
              width: { xs: '120px', sm: '160px' },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: 0,
                backgroundColor: '#831F3F'
              }
            }}
          />
          <Typography variant="subtitle1">WAX</Typography>
        </Box>
      </>

      <Button 
        variant="contained" 
        size="large" 
        sx={{
          my: 1,
          background: "#882140",
          borderRadius: "0",
          color: "white",
          border: "1px solid white",
          textTransform: 'none',
        }}
      >
        Withdraw
      </Button>
    </Box>
  );
};

export default CpuSaleFormWithdraw;