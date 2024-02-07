import React from 'react'
import Slider from "react-slick";
import { TestimonialCard } from '@/components/atoms/card'

const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: true
    };
    return (
        <div>
            <Slider {...settings}>
                <TestimonialCard data={{ avatar: '/assets/avatar/avatar-1.png', description: '', name: ''}}/>
                <TestimonialCard data={{ avatar: '/assets/avatar/avatar-2.png', description: '', name: ''}}/>
                <TestimonialCard data={{ avatar: '/assets/avatar/avatar-3.png', description: '', name: ''}}/>
            </Slider>
        </div>
    )
}

export default Testimonials