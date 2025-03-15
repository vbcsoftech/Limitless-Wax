import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';

const CpuSaleForm_Stake: React.FC = () => {
  return (
    <Box 
      sx={{
        width: { xs: '100%', sm: '60%' },
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      {/* Amount to send section */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Amount to send</Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2
        }}>
          <TextField
            type="text"
            size="small"
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
      </Box>

      {/* Days and User section */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 4 }
        }}
      >
        {/* Days Input */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>Number of days</Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2
          }}>
            <TextField
              type="text"
              size="small"
              margin="none"
              InputLabelProps={{ style: { color: '#fff' } }}
              sx={{ 
                input: { 
                  color: '#fff',
                  height: '0.75em',
                  padding: '8px 12px'
                },
                width: '40px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  backgroundColor: '#831F3F'
                }
              }}
            />
            <Typography variant="subtitle1">Days</Typography>
          </Box>
        </Box>

        {/* User Input */}
        <Box>
          <Typography variant="body2" sx={{ mb: 1 }}>User to stack to</Typography>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center'
          }}>
            <TextField
              type="text"
              size="small"
              margin="none"
              InputLabelProps={{ style: { color: '#fff' } }}
              sx={{ 
                input: { 
                  color: '#fff',
                  height: '0.75em',
                  padding: '8px 12px'
                },
                width: '140px',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none'
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 0,
                  backgroundColor: '#831F3F'
                }
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Amount to be staked section */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Amount to be staked</Typography>
        <Typography variant="subtitle1">11.349123158 WAX</Typography>
      </Box>

      {/* Action Button */}
      <Button 
        variant="contained" 
        size="large" 
        sx={{
          mt: 1,
          background: "#882140",
          borderRadius: "0",
          color: "white",
          border: "1px solid white",
          textTransform: 'none',
          width: 'fit-content',
          minWidth: 'fit-content',
          '&:hover': {
            background: "#9C2749"
          }
        }}
      >
        Stake to user
      </Button>
    </Box>
  );
};

export default CpuSaleForm_Stake;