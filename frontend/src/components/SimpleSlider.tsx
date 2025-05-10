'use client'

import { ReactElement } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { NextArrow, PrevArrow } from './Arrows'

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
}

type SimpleSliderProps<T extends object> = {
  values: T[]
  Component: React.ComponentType<T>
}

function SimpleSlider<T extends object>({
  values,
  Component,
}: SimpleSliderProps<T>): ReactElement {
  return (
    <Slider {...settings}>
      {values.map((item, index) => (
        <div key={index}>
          <Component {...(item as T)} />
        </div>
      ))}
    </Slider>
  )
}

export default SimpleSlider
