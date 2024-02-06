import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'
import { device } from '@/components/media'

interface IProps { icon: string, title: string, description: string, className?: string }

const TechnologyCard = ({
    icon,
    title,
    description,
    className = ''
}: IProps) => {
    return (
        <STechnologyCard>
            <Image src={icon} height={60} width={60} alt='image-category' />
            <p className='title'>{title}</p>
            <p className='description'>{description}</p>
        </STechnologyCard>
    )
}

export default TechnologyCard

const STechnologyCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: fit-content;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media ${device.tabletS} {
        width: 220px;
        height: 190px;
        padding: 1rem 1.5rem;
    }
    
    @media ${device.tablet} {
        width: 280px;
        height: 250px;
        padding: 1rem 1.5rem;
    }

    img {
        margin-bottom: 0.75rem;
        height: 45px;
        width: 45px;
        object-fit: contain;
        object-position: center;

        @media ${device.tablet} {
            height: 60px;
            width: 60px;
            margin-bottom: 1.5rem;
        }
    }

    .title {
        font-weight: 600;
        font-size: ${fontSize.small};
        margin-bottom: 0.5rem;
        color: var(--text-dark);
        text-align: center;

        @media ${device.tablet} {
            font-size: ${fontSize.normal};
            margin-bottom: 1rem;
        }
    }

    .description {
        font-size: ${fontSize.extraSmall};
        text-align: center;
        color: var(--text-dark-light);

        @media ${device.tablet} {
            font-size: ${fontSize.small};
        }
    }
`