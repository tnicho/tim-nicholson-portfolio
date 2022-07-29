import React, {Component} from 'react'
import { Box,Typography } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function ScreenshotCarousel () {
  const settings = {
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
          <Box>
            <img src="./PortfolioPics/Screenshots/MYIM Card Picture.png" width={960} height={540}/>
          </Box>
          <Box>
            <img src="./PortfolioPics/Screenshots/MYIM Card Picture.png" width={960} height={540}/>
          </Box>
        </Slider>
      </Box>
    )
}
