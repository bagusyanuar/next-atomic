import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'
import { device } from '@/components/media'

interface IProps { image: string, text: string, className?: string }
const CategoryCard = ({
    image,
    text,
    className = ''
}: IProps) => {
    return (
        <SCategoryCard className={className}>
            <div className='image-wrapper'>
                <Image src={image} height={80} width={80} alt='image-category' priority />
            </div>
            <p className='title'>{text}</p>
        </SCategoryCard>
    )
}

export default CategoryCard

const SCategoryCard = styled.div`
    cursor: pointer;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 90px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media ${device.tablet} {
        height: 140px;
        width: 140px;
    }

    .image-wrapper {
        width: 100%;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            height: 50px;
            width: 50px;
            object-fit: contain;
            object-position: center;
            border-radius: 10px;

            @media ${device.tablet} {
                height: 60px;
                width: 60px;
            }
        }
    }
    

    .title {
        color: var(--text-dark);
        font-size: ${fontSize.extraSmall};
        font-weight: 600;
        height: 24px;
        text-align: center;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        line-height: 1.2;

        @media ${device.tablet} {
            font-size: ${fontSize.small};
            height: 33px;
        }
    }
`