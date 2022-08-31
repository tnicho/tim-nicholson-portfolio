import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useReward } from "react-rewards";

export default function WelcomeButton() {
    const {reward: confettiLeft, isAnimating: isConfettiLeftAnimating } = useReward('rewardLeft', 'confetti', {angle:'105'});
    const {reward: confettiRight, isAnimating: isConfettiRightAnimating} = useReward('rewardRight', 'confetti',{angle:"75"});

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
    display: 'flex',
    justifyContent:'space-evenly',
    '&:hover': {
      cursor: 'pointer'
    },
  }}
   >
    <span id="rewardLeft"/>
    <Typography variant='h2'>WELCOME TO MY PORTFOLIO</Typography>
    <span id="rewardRight"/>
    </Box>
  )
}
