'use client';

import { FC } from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { NextArrow, PrevArrow } from './Arrows';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

interface SimpleSliderProps {
  values: string[];
}

const SimpleSlider: FC<SimpleSliderProps> = ({ values }) => {
  return (
    <Slider {...settings}>
      {' '}
      {values.map((item, index) => (
        <div key={index}>
          <Image
            className="w-[90%] md:w-[80%] lg:w-[70%] m-0 m-auto max-w-full h-auto"
            height={100}
            width={100}
            src={item}
            alt={item}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;