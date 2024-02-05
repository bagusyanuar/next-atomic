import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'

interface IProps { image: string, text: string, className?: string }
const CategoryCard = ({
    image,
    text,
    className = ''
}: IProps) => {
    return (
        <SCategoryCard className={className}>
            <Image src={image} height={120} width={120} alt='image-category' priority />
            <p className='title'>{text}</p>
        </SCategoryCard>
    )
}

export default CategoryCard

const SCategoryCard = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 170px;
    width: 140px;
    border-radius: 10px;

    img {
        height: 120px;
        width: 100%;
        object-fit: contain;
        object-position: center;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .title {
        color: var(--text-dark);
        font-size: ${fontSize.normal};
        font-weight: 600;
        height: 40px;
        text-align: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
`