import React from 'react'
import { SectionTitle } from '@/components/atoms/typography'
import { CategoriesCard } from '@/components/molecules/categories'
import { device } from '@/components/media'
import styled from 'styled-components'

const Categories = () => {
    return (
        <StyledWrapper>
            <StyledSectionTitle text='CATEGORY' className='mb-5' />
            <CategoriesCard />
        </StyledWrapper>
    )
}

export default Categories

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