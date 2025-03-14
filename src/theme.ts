import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Assuming a dark theme
    primary: {
      main: '#A78BFA', // Example primary color
    },
    secondary: {
      main: '#F472B6', // Example secondary color
    },
    background: {
      default: 'none', // Dark background
      paper: 'none', // Slightly lighter for cards/paper
    },
    text: {
      primary: '#CBD5E1', // Light text color
      secondary: '#94A3B8', // Slightly darker text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Or your preferred font
  },
});

export default theme;