import React from 'react'
import { SectionTitle } from '@/components/atoms/typography'
import { Categories } from '@/components/molecules/modules/home'
import { device } from '@/components/media'
import styled from 'styled-components'

interface IProps { className?: string }

const CategoriesSection = ({className = ''}: IProps) => {
    return (
        <StyledWrapper className={className}>
            <StyledSectionTitle text='CATEGORY' />
            <Categories />
        </StyledWrapper>
    )
}

export default CategoriesSection

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