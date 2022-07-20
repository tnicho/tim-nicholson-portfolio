import React from 'react'
import { Box,Typography } from '@mui/material'
import Slider from "react-slick"

export default function ScreenshotCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    return (
      <Box>
        <Typography>Carousel</Typography>
        <Slider {...settings}>
          <div>
            <img src="./PortfolioPics/Screenshots/MYIM Card Picture.png"/>
          </div>
          <div>
            <img src="./PortfolioPics/Screenshots/MYIM Card Picture.png"/>
          </div>
        </Slider>
      </Box>
  )
}
