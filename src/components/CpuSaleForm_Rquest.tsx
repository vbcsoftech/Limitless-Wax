import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const CpuSaleForm_Rquest: React.FC = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 4, md: 6 },
        width: '100%'
      }}
    >
      {/* Form Section */}
      <Box 
        width={{ xs: '100%', md: '60%' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 3 }
        }}
      >
        {/* Amount to send */}
        <Box>
          <Typography 
            variant="body2"
            sx={{ 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Amount to send
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1, sm: 2 },
            mb: { xs: 1, sm: 2 }
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
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              WAX
            </Typography>
          </Box>
        </Box>

        {/* Number of days */}
        <Box>
          <Typography 
            variant="body2"
            sx={{ 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Number of days
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: { xs: 1, sm: 2 },
            mb: { xs: 1, sm: 2 }
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
                width: { xs: '40px', sm: '40px' },
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
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              Days
            </Typography>
          </Box>
        </Box>

        {/* Amount to be staked */}
        <Box>
          <Typography 
            variant="body2"
            sx={{ 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}
          >
            Amount to be staked
          </Typography>
          <Typography 
            variant="subtitle1"
            sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
          >
            11.349123158 WAX
          </Typography>
        </Box>

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
            minWidth: 'fit-content',
            width: 'fit-content',
            py: { xs: 1, sm: 1.5 },
            px: { xs: 3, sm: 4 },
            fontSize: { xs: '0.875rem', sm: '1rem' },
            '&:hover': {
              background: "#9C2749"
            }
          }}
        >
          Request self stake
        </Button>
      </Box>

      {/* ROI Section */}
      <Box 
        bgcolor="#831F3F" 
        borderRadius={{ xs: 3, sm: 5 }}
        p={{ xs: 2, sm: 3 }}
        textAlign="center"
        width={{ xs: '100%', md: '35%' }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1, sm: 2 }
        }}
      >
        <Typography 
          variant="h6"
          sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
        >
          ROI
        </Typography>
        {['Daily', 'Weekly', 'Monthly'].map((period) => (
          <Box key={period} sx={{ mt: { xs: 1, sm: 2 } }}>
            <Typography 
              variant="body2"
              sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
            >
              {period}
            </Typography>
            <Typography 
              variant="subtitle1" 
              fontWeight="bold"
              sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
            >
              11.349 WAX
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CpuSaleForm_Rquest;