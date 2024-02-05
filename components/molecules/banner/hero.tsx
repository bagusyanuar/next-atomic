import React from 'react'
import Image from 'next/image'
import { SlickItem, SlickWrapper, SlickArrowNext, SlickArrowPrev } from '@/components/atoms/slick'

interface IProps { className?: string }
const BannerHero = ({ className = '' }: IProps) => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowNext />,
        prevArrow: <SlickArrowPrev />,
    }
    return (
        <SlickWrapper settings={settings} className={className}>
            <SlickItem>
                <Image src='/assets/banner/banner-sample-1.jpg' height={500} width={1250} alt='banner-image' priority />
            </SlickItem>
            <SlickItem>
                <Image src='/assets/banner/banner-sample-2.jpg' height={500} width={1250} alt='banner-image' priority />
            </SlickItem>
        </SlickWrapper>
    )
}

export default BannerHero