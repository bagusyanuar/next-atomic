import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '@/components/media'

type TTestimonial = {
  avatar: string
  name: string
  description: string
}

interface IProps { data: TTestimonial, className?: string }

const TestimonialCard = ({ data, className = '' }: IProps) => {
  return (
    <STestimonialCard className={className}>
      <Image src={data.avatar} height={80} width={80} alt='avatar-testimoni' />
      <p className='name'>{data.name}</p>
      <p className='description'>{data.description}</p>
    </STestimonialCard>
  )
}

export default TestimonialCard

const STestimonialCard = styled.div`
    width: 270px;
    height: 200px;
    border-radius: 10px;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    @media ${device.tablet} {
      width: 320px;
      height: 250px;
      padding: 1.5rem 2rem;
    }

    img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center center;
        border: 2px solid var(--primary-color);
        margin-bottom: 0.5rem;

        @media ${device.tablet} {
          height: 80px;
          width: 80px;
          border: 4px solid var(--primary-color);
        }
      }

    .name {
        font-size: 0.8em;
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 0.5rem;

        @media ${device.tablet} {
          font-size: 1em;
        }
    }

    .description {
        font-size: 0.6em;
        color: var(--text-dark-light);
        font-style: italic;
        text-align: center;
        width: 100%;
        height: 75px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }
`