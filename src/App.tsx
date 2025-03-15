import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './theme';
import { styled } from '@mui/material/styles';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import Account from './pages/Account';
import Footer from './components/Footer';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
}));

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Box sx={(theme) => ({
        backgroundImage: "url('images/Rectangle.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: '100vh',
        color: theme.palette.text.primary,
      })}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;