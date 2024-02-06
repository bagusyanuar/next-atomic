import React from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionSubTitle } from '@/components/atoms/typography'
import { TestimonialsCard } from '@/components/molecules/testimonials'
import { device } from '@/components/media'

const Testimonials = () => {
    return (
        <StyledWrapper>
            <SectionTitle text='TESTIMONI' className='mb-1' />
            <StyledSectionSubTitle text='Testimoni para pengguna kepada produk kami' />
            <TestimonialsCard />
        </StyledWrapper>
    )
}

export default Testimonials

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