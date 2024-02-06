import React from 'react'
import Slider from "react-slick";
import { TestimonialCard } from '@/components/atoms/card'

const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <div>
            <Slider {...settings}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </Slider>
        </div>
    )
}

export default Testimonials