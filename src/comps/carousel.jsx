/* eslint-disable react/prop-types */
import { Carousel } from 'flowbite-react'
import React from 'react'

export const CCGCarousel = ({ images, className }) => <Carousel className={className}>
    {images.map((image, i) => <img key={i} alt="" src={image} className='object-contain h-full' />)}
</Carousel>
