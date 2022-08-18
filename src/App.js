import './App.css';
import React from "react";
import { Fullpage } from './pages/FullPageWrapper/FullPage';
import { CssBaseline, Box} from '@mui/material';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Box className="App">
      <CssBaseline/>
      <NavBar/>
      <Fullpage />
    </Box>
  );
}

export default App;
