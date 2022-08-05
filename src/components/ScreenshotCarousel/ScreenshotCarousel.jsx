import React, {Component} from 'react'
import { Box,Typography } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function ScreenshotCarousel (props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    const images = props.images
    return (
      <Box>
        <Slider {...settings}>

        {images.map(image => {
          return <img  src={image}/>
        })}
          {/* <Box>
            <img src="./PortfolioPics/Screenshots/MYIM Card Picture.png" width={640} height={360}/>
          </Box>
          <Box>
            <img src="./PortfolioPics/Screenshots/MYIM Card Picture.png" width={640} height={360}/>
          </Box> */}
        </Slider>
      </Box>
    )
}
