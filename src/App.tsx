import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundImage: "url('images/Rectangle.png')",backgroundSize:"100%", color: 'text.primary', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Header />
          <Account />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;