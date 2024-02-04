import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

interface IProps { children: React.ReactNode, settings: any, className?: string, ratio?: string }

const SlickWrapper = ({
    children,
    settings,
    className = '',
    ratio = '5 / 2'
}: IProps) => {
    return (
        <SSlickWrapper {...settings} adaptiveHeight $ratio={ratio} className={className}>
            {children}
        </SSlickWrapper>
    )
}

export default SlickWrapper

const SSlickWrapper = styled(Slider) <{ $ratio: string }>`
    border-radius: 10px;
    width: 100%;
    aspect-ratio: ${({ $ratio }) => $ratio};

    *:not(.custom-arrow-slick) {
        border-radius: 10px;
    }

    .slick-custom-item {
        aspect-ratio: ${({ $ratio }) => $ratio};
    }
`