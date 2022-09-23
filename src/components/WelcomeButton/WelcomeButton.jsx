import { Box, Typography } from '@mui/material';
import React from 'react'
import { useReward } from "react-rewards";
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

export default function WelcomeButton() {
    const {reward: confettiLeft, isAnimating: isConfettiLeftAnimating } = useReward('rewardLeft', 'confetti', {angle:'75', elementCount:'100'});
    const {reward: confettiRight, isAnimating: isConfettiRightAnimating} = useReward('rewardRight', 'confetti',{angle:"105", elementCount:'100'});

  return (
   <Box
   disable={isConfettiLeftAnimating || isConfettiRightAnimating}
   onClick={() => {
    if(!(isConfettiLeftAnimating || isConfettiRightAnimating)){
      confettiLeft();
      confettiRight();
    }
}}
   sx={{
    my: '2vh',
    display: 'flex',
    justifyContent:'space-evenly',
    '&:hover': {
      cursor: 'pointer'
    },
  }}
   >

    <ThemeProvider theme = {theme}>

    <span id="rewardLeft"/>
    <Typography sx={{fontWeight: 'bolder'}} align='center' variant='h2' color='primary.main'>WELCOME TO MY PORTFOLIO</Typography>
    <span id="rewardRight"/>
    </ThemeProvider>
    </Box>
  )
}
