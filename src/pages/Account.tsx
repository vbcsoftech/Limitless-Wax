// src/components/Dashboard.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import AccounDashboard from '../components/AccountDashboard';

const Account: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
        padding: 4,
      }}
    >
      {/* Header Section */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: 3, md: 2 }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', md: 'center' }, 
        mb: 3 
      }}>
        <Box 
          width={{ xs: '100%', md: '60%' }} 
          display="flex" 
          gap={{ xs: 2, md: 4 }} 
          alignItems="center"
        >
          <Box 
            boxShadow="10px 10px 8px #00000026" 
            width={{ xs: '80px', sm: '100px', md: '120px' }} 
            height={{ xs: '80px', sm: '100px', md: '120px' }} 
            bgcolor="#8C243F" 
            borderRadius="50%" 
          />
          <Typography 
            sx={{
              color: "white",
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }} 
            variant="h4"
          >
            ki.fg.wam
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 4 },
          width: { xs: '100%', md: 'auto' }
        }}>
          <Box 
            bgcolor="#391E24" 
            borderRadius="25px" 
            px={{ xs: 1.5, sm: 2 }} 
            py={2} 
            boxShadow="5px 5px 5px #00000026"
            sx={{
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>Total WAX</Typography>
            <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}> Balance:</Typography>
            <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>6.12345672</Typography>
          </Box>
          <Box 
            bgcolor="#391E24" 
            borderRadius="25px" 
            px={{ xs: 1.5, sm: 2 }} 
            py={2} 
            boxShadow="5px 5px 5px #00000026"
            sx={{
              width: { xs: '100%', sm: 'auto' }
            }}
          >
            <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>Total USD</Typography>
            <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}> Balance:</Typography>
            <Typography variant="h6" fontSize={{ xs: '1rem', sm: '1.25rem' }}>$1.9321245</Typography>
          </Box>
        </Box>
      </Box>

      {/* Dashboard Title */}
      <Box py={3} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
          Dashboard
        </Typography>
        <Link sx={{color: "#EBEBEB", textDecoration: "none"}}>View on Wax.bloks.io</Link>
      </Box>

      {/* Flexbox Layout for Dashboard Items */}
      <AccounDashboard />
    </Box>
  );
};

export default Account;