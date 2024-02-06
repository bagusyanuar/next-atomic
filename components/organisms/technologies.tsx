import React from 'react'
import { SectionTitle } from '@/components/atoms/typography'
import { TechnologiesCard } from '@/components/molecules/technologies'
import styled from 'styled-components'
import { device } from '@/components/media'

const Technologies = () => {
    return (
        <StyledWrapper>
            <StyledSectionTitle text='TECHNOLOGY' />
            <TechnologiesCard />
        </StyledWrapper>
    )
}

export default Technologies

const StyledWrapper = styled.div`
    margin-bottom: 1rem;

    @media ${device.tablet} {
        margin-bottom: 2.5rem;
    }
`
const StyledSectionTitle = styled(SectionTitle)`
    margin-bottom: 1rem;

    @media ${device.tablet} {
        margin-bottom: 1.25rem;
    }
`