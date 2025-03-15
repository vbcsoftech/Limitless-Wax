import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }
      }}
    >
      {/* Header if you have one */}
      <Box 
        component="main" 
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
      {/* Footer */}
      <Box 
        component="footer"
        sx={{
          mt: 'auto', // Pushes footer to bottom
          width: '100%',
          position: 'relative', // Changed from fixed/absolute
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        {/* Your footer content */}
      </Box>
    </Box>
  );
};

export default Layout; 