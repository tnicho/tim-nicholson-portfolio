import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useReward } from "react-rewards";

export default function WelcomeButton() {
    const { reward, isAnimating } = useReward('rewardId', 'confetti');
  return (
   <Box
   onClick={reward}
   sx={{
    '&:hover': {
      cursor: 'pointer'
    },
  }}
   >
    <span id="rewardId" />
    <Typography variant='h2'>WELCOME TO MY PORTFOLIO</Typography>
    </Box>
  )
}
