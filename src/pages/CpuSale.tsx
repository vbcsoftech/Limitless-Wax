import React from 'react';
import { Box, Typography, Button, List, TextField } from '@mui/material';

import TotalWax from '../components/TotalWax';
import CpuSaleForm from '../components/CpuSaleForm'

const Cpu: React.FC = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pb: { xs: 8, sm: 10, md: 12 }, // Add padding bottom for footer
        position: 'relative',
        '&::before': {  // Optional: if you have a background
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          // Add your background properties here
        }
      }}
    >
      <TotalWax />
      {/* Main Content Section */}
      <CpuSaleForm />
    </Box>
  );
};

export default Cpu;