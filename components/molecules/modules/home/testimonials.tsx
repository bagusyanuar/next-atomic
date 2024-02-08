import React from 'react'
import Slider from "react-slick";
import { TestimonialCard } from '@/components/atoms/card'

interface IProps { className?: string }

const Testimonials = ({ className = '' }: IProps) => {
    const settings = {
        className: "center",
        centerMode: true,
        slidesToShow: 1,
        speed: 500,
        variableWidth: true,
        autoplay: true,
        arrows: false,
    };

    return (
        <Slider {...settings} className={className}>
            <TestimonialCard data={{ avatar: '/assets/avatar/avatar-1.png', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', name: 'Johnny Abs' }} />
            <TestimonialCard data={{ avatar: '/assets/avatar/avatar-2.png', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', name: 'Wolfmother' }} />
            <TestimonialCard data={{ avatar: '/assets/avatar/avatar-3.png', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged', name: 'Holygrail' }} />
        </Slider>
    )
}

export default Testimonials