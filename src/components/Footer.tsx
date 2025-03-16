import React from "react";
import { Box, Container, Grid, Link, Typography, useMediaQuery, Theme } from "@mui/material";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#331E22",// Dark brown background
        color: "white",
        py: 4,
        // Hide on mobile
        display: { xs: 'none', sm: 'block' },
        // Or with conditional visibility
        visibility: isMobile ? 'hidden' : 'visible',
        // Responsive opacity
        opacity: { xs: 0, sm: 1 },
        // Smooth transition
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Help Section */}
          <Grid item xs={12} sm={5}>
            <Box width={1/2}>
              <img src="images/Limitless 1.png" alt="logo" />
              <Typography variant="body2" sx={{ mt: 1 }}>
                If you need help or have any questions, please go through our{" "}
                <Link href="#" color="inherit" underline="hover">
                  Discord
                </Link>.
              </Typography>
              {/* Copyright Section */}
              <Box mt={4} textAlign="center">
                <Typography variant="body2">
                  LimitlessWAX® Copyright © {new Date().getFullYear()}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} sm={7} sx={{mt: 3}}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Link href="/" color="inherit" underline="hover">
                  Home
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="/account" color="inherit" underline="hover">
                  Account
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="/cpusale" color="inherit" underline="hover">
                  Cpu4sale
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="limitlesswax" color="inherit" underline="hover">
                  LimitlessWAX
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="https://github.com/" color="inherit" underline="hover">
                  GitHub
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="https://discord.com/" color="inherit" underline="hover">
                  Discord
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="https://www.privacy.com" color="inherit" underline="hover">
                  Privacy
                </Link>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Link href="https://www.term.com/" color="inherit" underline="hover">
                  Terms
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;