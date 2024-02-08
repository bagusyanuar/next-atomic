import React from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionSubTitle } from '@/components/atoms/typography'
import { Testimonials } from '@/components/molecules/modules/home'
import { device } from '@/components/media'

interface IProps { className?: string }

const TestimonialsSection = ({ className = '' }: IProps) => {
    return (
        <StyledWrapper className={className}>
            <SectionTitle text='TESTIMONI' className='mb-1' />
            <StyledSectionSubTitle text='Testimoni para pengguna kepada produk kami' />
            <Testimonials />
        </StyledWrapper>
    )
}

export default TestimonialsSection

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