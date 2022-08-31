import './App.css';
import React from "react";
import { Fullpage } from './pages/FullPageWrapper/FullPage';
import { CssBaseline, Box, createTheme, ThemeProvider} from '@mui/material';
import NavBar from './components/NavBar/NavBar';

const theme = createTheme({
  palette:{
    primary:{
      main: '#1B721B'
    },
    secondary:{
      light: '#FFFFFF',
      main: '#D3D3D3',
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="`App">
        <CssBaseline/>
        <NavBar/>
        <Fullpage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
