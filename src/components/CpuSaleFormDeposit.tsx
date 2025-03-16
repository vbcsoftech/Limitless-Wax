import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const CpuSaleFormDeposit: React.FC = () => {
  return (
    <Box 
      width={{ xs: '100%', sm: '80%', md: '60%' }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: "#EDEDED"
      }}
    >
      {/* Balance Information */}
      <Box 
        display="flex" 
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 2, sm: 4 }}
        width="100%"
      >
        <Box 
          sx={{
            flex: 1,
            p: { xs: 2, sm: 0 }
          }}
        >
          <Typography 
            variant='h6'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              mb: 1
            }}
          >
            Wax Balance
          </Typography>
          <Typography 
            variant='subtitle1' 
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            11.3491 WAX
          </Typography>
        </Box>
        <Box 
          sx={{
            flex: 1,
            p: { xs: 2, sm: 0 }
          }}
        >          
          <Typography 
            variant='h6'
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              mb: 1
            }}
          >
            Wax Balance
          </Typography>
          <Typography 
            variant='subtitle1' 
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}
          >
            11.3491 WAX
          </Typography>
        </Box>
      </Box>

      {/* Amount Input Section */}
      <Box 
        sx={{
          mt: { xs: 1, sm: 2 }
        }}
      >
        <Typography 
          variant="body2"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem' },
            mb: 1
          }}
        >
          Amount to send
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: { xs: 1, sm: 2 },
          my: { xs: 1, sm: 2 }
        }}>
          <TextField
            margin="none"
            InputLabelProps={{ style: { color: '#fff' } }}
            sx={{ 
              input: { 
                color: '#fff',
                height: '0.75em',
                padding: '8px 12px',
                fontSize: { xs: '0.875rem', sm: '1rem' }
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
          <Typography 
            variant="subtitle1"
            sx={{
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            WAX
          </Typography>
        </Box>
      </Box>

      {/* Action Button */}
      <Button 
        variant="contained" 
        size="large" 
        sx={{
          mt: { xs: 2, sm: 3 },
          mb: 1,
          background: "#882140",
          borderRadius: "0",
          color: "white",
          border: "1px solid white",
          textTransform: 'none',
          width: "fit-content",
          py: { xs: 1, sm: 1.5 },
          px: { xs: 3, sm: 4 },
          fontSize: { xs: '0.875rem', sm: '1rem' },
          '&:hover': {
            background: "#9C2749"
          }
        }}
      >
        Deposit and Earn
      </Button>
    </Box>
  );
};

export default CpuSaleFormDeposit;