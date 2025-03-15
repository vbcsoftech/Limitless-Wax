import React, { useState } from 'react';
import { Toolbar, Button, Box, useMediaQuery, IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navigationItems = [
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' },
  { label: 'Spudnik', path: '/spudnik' },
  { label: 'Limitlesswax', path: '/limitlesswax' }
] as const;

const Header = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <Box position="static" sx={{bgcolor: "none", boxShadow: 'none', py: 2 }}>
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