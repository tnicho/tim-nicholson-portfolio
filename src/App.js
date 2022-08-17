import './App.css';
import React from "react";
import { Fullpage } from './pages/FullPageWrapper/FullPage';
import { CssBaseline, Box} from '@mui/material';

function App() {
  return (
    <Box className="App">
      <CssBaseline/>
      <Fullpage />
    </Box>
  );
}

export default App;
