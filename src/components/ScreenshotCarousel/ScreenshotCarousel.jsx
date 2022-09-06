import React from 'react'
import { Box} from '@mui/material'
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
    const screenshots = props.screenshots
    return (
      <Box>
        <Slider {...settings}>
        {screenshots.map(screenshot => {
          return <img alt='Project Screenshot' src={screenshot}/>
        })}
        </Slider>
      </Box>
    )
}
