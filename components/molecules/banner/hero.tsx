import React from 'react'
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
                <div className='w-full h-full bg-gray-500 flex items-center justify-center'>
                    <p className='text-white'>SLIDER 1</p>
                </div>
            </SlickItem>
            <SlickItem>
                <div className='w-full h-full bg-gray-500 flex items-center justify-center'>
                    <p className='text-white'>SLIDER 2</p>
                </div>
            </SlickItem>
        </SlickWrapper>
    )
}

export default BannerHero