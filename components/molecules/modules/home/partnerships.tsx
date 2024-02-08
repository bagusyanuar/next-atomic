import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { fontSize } from '@/components/constant'

interface IProps { className?: string }

const Partnerships = ({ className = '' }: IProps) => {
  return (
    <Wrapper className={className}>
      <div className='partnership'>
          <h1 className='title'>YUSPIN</h1>
          <p className='description'>Produk kualitas terbaik, Pertama di Indonesia Dilengkapi dengan teknologi anti bakteri Silver+</p>
      </div>
    </Wrapper>
  )
}

export default Partnerships

const Wrapper = styled.div`
    background-color: var(--primary-color-light);
    padding: 3rem 5rem;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media ${device.tablet} {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .partnership {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: start;

        h1 {
          margin-bottom: 1.5rem;
          font-size: ${fontSize.normal};
          font-weight: 600;
          color: var(--text-dark);
        }

        p {
          font-size: ${fontSize.normal};
          color: var(--text-dark);
        }
    }
`