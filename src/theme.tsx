import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8C243F',
      dark: '#5C2736',
      light: '#831F3F',
    },
    secondary: {
      main: '#391E24',
      dark: '#331E22',
      light: '#4A1E2A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#EBEBEB',
    },
    background: {
      default: '#1E1E1E',
      paper: '#331E22',
    },
  },
  typography: {
    allVariants: {
      color: '#FFFFFF',
    },
    h1: { color: '#FFFFFF' },
    h2: { color: '#FFFFFF' },
    h3: { color: '#FFFFFF' },
    h4: { color: '#FFFFFF' },
    h5: { color: '#FFFFFF' },
    h6: { color: '#FFFFFF' },
    body1: { color: '#FFFFFF' },
    body2: { color: '#FFFFFF' },
    subtitle1: { color: '#FFFFFF' },
    subtitle2: { color: '#FFFFFF' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          textTransform: 'none',
        },
        contained: {
          color: '#FFFFFF',
        },
        outlined: {
          color: '#FFFFFF',
          borderColor: '#FFFFFF',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: '#FFFFFF',
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#FFFFFF',
        },
      },
    },
  },
});

export default theme; 