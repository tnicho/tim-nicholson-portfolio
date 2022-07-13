import './App.css';
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import {Box} from "@mui/material"
import LandingPage from './components/LandingPage';
import { Fullpage } from './pages/FullPage';

function App() {
  return (
    <div className="App">
      <Fullpage />
    </div>
  );
}

export default App;
