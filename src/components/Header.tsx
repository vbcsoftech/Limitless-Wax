import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, IconButton, Theme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationItem {
  label: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'About Us', path: '/about' },
  { label: 'Account', path: '/account' },
  { label: 'Spudnik', path: '/spudnik' },
  { label: 'Limitlesswax', path: '/limitlesswax' }
];

const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleNavigation = (path: string): void => {
    window.location.href = path;
  };

  return (
    <Box position="static" sx={{bgcolor: "none", boxShadow: 'none', py: 2 }}>
      <Toolbar style={{justifyContent:"space-between"}} >
        <img src="images/Limitless 1.png" onClick={() => window.location.href="/dashboard"}/>
        {isMobile ? (
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navigationItems.map((item: NavigationItem) => (
              <Button 
                key={item.path}
                color="inherit"
                onClick={() => handleNavigation(item.path)}
              >
                {item.label}
              </Button>
            ))}
            <Button 
              color="inherit"
              variant='outlined'
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