import React from 'react'
import { CustomArrowProps } from 'react-slick'
import styled from 'styled-components'

const SlickArrowPrev = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
    return (
        <SSlickArrowPrev {...props} className='custom-arrow-slick'>
            <i className='bx bx-left-arrow-alt'></i>
        </SSlickArrowPrev>
    )
}

export default SlickArrowPrev

const SSlickArrowPrev = styled.div`
    position: absolute;
    display: flex !important;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 15px;
    z-index: 2;
    width: 30px;
    height: 30px;
    transform: translate(0, -50%);
    color: white;
    cursor: pointer;
    border-radius: 50%;
    background-color: var(--primary-color);
    opacity: 0.8;
    font-size: 1em;
    &::before {
        content: '';
    }

    &:hover {
        background-color: var(--primary-color);
        color: white;
        opacity: 1;
    }
`