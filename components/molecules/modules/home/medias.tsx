import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface IProps { className?: string }
const Medias = ({ className = '' }: IProps) => {
    return (
        <Wrapper className={className}>
            <Image
                src='/assets/partners/i-news.png'
                alt='image-partner'
                width={68}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/md.png'
                alt='image-partner'
                width={40}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/tribun-news.png'
                alt='image-partner'
                width={84}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/sindo-news.png'
                alt='image-partner'
                width={156}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/interupsi.png'
                alt='image-partner'
                width={120}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/akurat.png'
                alt='image-partner'
                width={100}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/telusur.png'
                alt='image-partner'
                width={70}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/klik.png'
                alt='image-partner'
                width={20}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/indopos.png'
                alt='image-partner'
                width={122}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/rumah-gagasan.png'
                alt='image-partner'
                width={79}
                height={20}
                className='me-5 mb-1'
            />
            <Image
                src='/assets/partners/edu-news.png'
                alt='image-partner'
                width={119}
                height={20}
            />
        </Wrapper>
    )
}

export default Medias

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
`