import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import styled from 'styled-components'
import { SlickArrowNext, SlickArrowPrev } from '@/components/atoms/slick'

interface IProps { className?: string }

const Banners = ({ className = '' }: IProps) => {
    const settings = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowNext />,
        prevArrow: <SlickArrowPrev />,
    }

    return (
        <SlickWrapper {...settings} adaptiveHeight className={className}>
            <SlickItem className='slick-custom-item'>
                <Image src='/assets/banner/banner-sample-1.jpg' height={500} width={1250} alt='banner-image' priority />
            </SlickItem>
            <SlickItem className='slick-custom-item'>
                <Image src='/assets/banner/banner-sample-2.jpg' height={500} width={1250} alt='banner-image' priority />
            </SlickItem>
        </SlickWrapper>
    )
}

export default Banners

const SlickWrapper = styled(Slider)`
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 5 / 2;

    *:not(.custom-arrow-slick) {
        border-radius: 10px;
    }

    .slick-custom-item {
        aspect-ratio: 5 / 2;
    }
`

const SlickItem = styled.div`
    width: 100%;
    aspect-ratio: inherit;
    border-radius: 10px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 10px;
    }
`