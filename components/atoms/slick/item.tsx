import React from 'react'
import styled from 'styled-components'

interface IProps { children: React.ReactNode, className?: string }

const SlickItem = ({ children, className = '' }: IProps) => {
    return (
        <SSlickItem  className={`slick-custom-item ${className}`}>
            {children}
        </SSlickItem>
    )
}

export default SlickItem

const SSlickItem = styled.div`
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