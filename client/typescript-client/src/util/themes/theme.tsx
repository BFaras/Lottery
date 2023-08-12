import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#181938', 
    },
    secondary: {
        main: '#fea004', 
      },
    success: {
      main: '#95bf44',
    },
    error: {
        main: '#b23631',
      },
  },
});

export default theme;