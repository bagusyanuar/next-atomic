import React from 'react'
import { SectionTitle, SectionSubTitle } from '@/components/atoms/typography'
import { ProductsCard } from '@/components/molecules/products'
import { device } from '@/components/media'
import styled from 'styled-components'

function BestSeller() {
    return (
        <StyledWrapper>
            <SectionTitle text='BEST SELLER' className='mb-1' />
            <StyledSectionSubTitle text='Dapatkan produk - produk terbaik kami' />
            <ProductsCard />
        </StyledWrapper>
    )
}

export default BestSeller

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