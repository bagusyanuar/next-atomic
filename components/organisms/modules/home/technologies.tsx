import React from 'react'
import { SectionTitle } from '@/components/atoms/typography'
import { Technologies } from '@/components/molecules/modules/home'
import styled from 'styled-components'
import { device } from '@/components/media'

interface IProps { className?: string }

const TechnologiesSection = ({className = ''}: IProps) => {
    return (
        <StyledWrapper className={className}>
            <StyledSectionTitle text='TECHNOLOGY' />
            <Technologies />
        </StyledWrapper>
    )
}

export default TechnologiesSection

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