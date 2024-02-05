import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'

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
    padding: 1rem 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    img {
        margin-bottom: 1.5rem;
    }

    .title {
        font-weight: 600;
        font-size: ${fontSize.normal};
        margin-bottom: 1rem;
        color: var(--text-dark);
    }

    .description {
        font-size: ${fontSize.small};
        text-align: center;
        color: var(--text-dark-light);
    }
`