import React from 'react'
import { SectionTitle, SectionSubTitle } from '@/components/atoms/typography'
import { BestSellers } from '@/components/molecules/modules/home'
import { device } from '@/components/media'
import styled from 'styled-components'

interface IProps { className?: string }

const BestSellersSection = ({ className = '' }: IProps) => {
    return (
        <StyledWrapper className={className}>
            <SectionTitle text='BEST SELLER' className='mb-1' />
            <StyledSectionSubTitle text='Dapatkan produk - produk terbaik kami' />
            <BestSellers />
        </StyledWrapper>
    )
}

export default BestSellersSection

const StyledWrapper = styled.div`
    margin-bottom: 1rem;

    @media ${device.tablet} {
        margin-bottom: 2.5rem;
    }
`
const StyledSectionSubTitle = styled(SectionSubTitle)`
    margin-bottom: 1rem;

    @media ${device.tablet} {
        margin-bottom: 2.5rem;
    }
`