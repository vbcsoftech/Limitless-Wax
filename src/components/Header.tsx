import React, { useState } from 'react';
import { Toolbar, Button, Box, useMediaQuery, IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navigationItems = [
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' },
  { label: 'Cpu4sale', path: '/cpusale' },
  { label: 'Limitlesswax', path: '/limitlesswax' }
] as const;

/**
 * Component description
 * @param {string} prop1 - Description of prop1
 * @param {string} prop2 - Description of prop2
 * @param {function} onAction - Description of onAction
 * @returns {JSX.Element}
 */
const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <Box position="static" sx={{
      position: 'relative',
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: { xs: 2, sm: 3, md: 4 },
      bgcolor: 'background.paper',
      borderRadius: 1,
      fontSize: { xs: '0.875rem', sm: '1rem' },
    }}>
      <Toolbar style={{justifyContent:"space-between"}} >
        <img 
          src="images/Limitless 1.png" 
          onClick={() => window.location.href="/dashboard"}
          style={{ maxWidth: '150px', height: 'auto', cursor: "pointer" }}
          alt="Logo"
        />
        {isMobile ? (
          <>
            <IconButton 
              edge="start" 
              sx={{ color: '#FFFFFF' }}
              aria-label="menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <MenuIcon />
            </IconButton>
            {mobileMenuOpen && (
              <Box 
                sx={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  bgcolor: 'rgba(51, 30, 34, 0.95)', // Semi-transparent dark background
                  width: '200px',
                  boxShadow: 3,
                  zIndex: 1000,
                  p: 2
                }}
              >
                {navigationItems.map((item) => (
                  <Button 
                    key={item.path}
                    fullWidth
                    sx={(theme) => ({ 
                      mb: 1,
                      color: theme.palette.text.primary,
                      '&:hover': {
                        color: theme.palette.text.secondary,
                      }
                    })}
                    onClick={() => {
                      handleNavigation(item.path);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button 
                  variant='outlined'
                  fullWidth
                  sx={(theme) => ({ 
                    color: theme.palette.text.primary,
                    borderColor: theme.palette.text.primary,
                    '&:hover': {
                      borderColor: theme.palette.text.secondary,
                    }
                  })}
                  onClick={() => {
                    handleNavigation("/login");
                    setMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
              </Box>
            )}
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navigationItems.map((item) => (
              <Button 
                key={item.path}
                sx={(theme) => ({ 
                  color: theme.palette.text.primary,
                  '&:hover': {
                    color: theme.palette.text.secondary,
                  }
                })}
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
            <Button 
              variant='outlined'
              sx={(theme) => ({ 
                color: theme.palette.text.primary,
                borderColor: theme.palette.text.primary,
                '&:hover': {
                  borderColor: theme.palette.text.secondary,
                }
              })}
              onClick={() => {
                handleNavigation("/login");
              }}
            >
              Login
            </Button>
          </Box>
        )}
      </Toolbar>
    </Box>
  );
};

export default Header;