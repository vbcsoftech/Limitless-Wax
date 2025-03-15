import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import CpuSale from './pages/CpuSale';
import LoginError from './pages/LoginError';
import LimitlessWAX from './pages/LimitlessWAX';
import Footer from './components/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Box sx={(theme) => ({
        backgroundImage: "url('images/Rectangle.png')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        minHeight: '100vh',
        color: theme.palette.text.primary,
      })}>
        <Container maxWidth="lg" sx={{ px: { xs: 0.5, sm: 1, md: 2 } }}>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/cpusale" element={<CpuSale />} />
            <Route path="/limitlesswax" element={<LimitlessWAX />} />
            <Route path="/login" element={<LoginError />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;