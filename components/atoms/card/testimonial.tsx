import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

type TTestimonial = {
  avatar: string
  name: string
  description: string
}

interface IProps { data: TTestimonial, className?: string }

const TestimonialCard = ({ data, className = '' }: IProps) => {
  return (
    <STestimonialCard className={className}>
      <div className='image-wrapper'>
        <Image src={data.avatar} height={60} width={60} alt='avatar-testimoni' />
      </div>

    </STestimonialCard>
  )
}

export default TestimonialCard

const STestimonialCard = styled.div`
    width: 300px;
    height: 220px;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    /* background-color: blueviolet; */
    margin: 0.5rem 0.5rem;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    .image-wrapper {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        height: 58px;
        width: 58px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center center;
      }
    }
    
`