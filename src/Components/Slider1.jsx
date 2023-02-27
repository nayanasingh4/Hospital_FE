import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from './../Images/Banner1.jpg'
import image2 from './../Images/Banner2.jpg'
import image3 from './../Images/Banner3.jpg'
import './slider.css'

const Slider1 = () => {
  return (
    <div className='slider'>
    <Carousel fade={true} pause={false}>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image2}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Slider1