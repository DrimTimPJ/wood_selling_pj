'use client'

import { ReactElement } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { NextArrow, PrevArrow } from './Arrows'

type SimpleSliderProps<T extends object> = {
  values: T[]
  Component: React.ComponentType<T>
}

function SimpleSlider<T extends object>({
  values,
  Component,
}: SimpleSliderProps<T>): ReactElement {
  const hasMultipleSlides = values.length > 1

  const settings = {
    dots: hasMultipleSlides,
    infinite: hasMultipleSlides,
    speed: 1000,
    autoplay: hasMultipleSlides,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: hasMultipleSlides,
    prevArrow: hasMultipleSlides ? <PrevArrow /> : undefined,
    nextArrow: hasMultipleSlides ? <NextArrow /> : undefined,
  }

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
