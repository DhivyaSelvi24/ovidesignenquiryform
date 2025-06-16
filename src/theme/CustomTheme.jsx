// src/theme/CustomTheme.js
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0d2c3e',
      paper: '#112d3a',
    },
    primary: {
      main: '#ff5722', // orange for buttons
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h4: {
      fontWeight: 700,
      letterSpacing: 2,
    },
    subtitle2: {
      fontSize: '0.9rem',
    },
    body2: {
      fontSize: '0.8rem',
    },
  },
});

export default customTheme;
