import './App.css';
import React from "react";
import { Fullpage } from './pages/FullPageWrapper/FullPage';
import { CssBaseline, Box, createTheme, ThemeProvider, AppBar} from '@mui/material';
import NavBar from './components/NavBar/NavBar';
import NavBarMobile from './components/NavBarMobile/NavBarMobile';
const theme = createTheme({
  palette:{
    primary:{
      // main: '#1B721B'
      main: '#002E20'
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
        <Box sx={{display: {sm: 'flex', xs: 'none'}}}>
          <NavBar/>
        </Box>
        <Box sx={{display: {sm: 'none'}}}>
          <NavBarMobile/>
        </Box>
        <Fullpage />
      </Box>
    </ThemeProvider>
  );
}

export default App;
