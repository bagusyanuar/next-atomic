import { device } from '@/components/media'
import React from 'react'
import styled from 'styled-components'

interface IProps { children: React.ReactNode }

const Container = ({ children }: IProps) => {
    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    )
}

export default Container

const ContentWrapper = styled.div`
    min-height: 550px;
    padding: 1rem 2rem;

    @media ${device.tablet} {
        padding: 1rem 5rem;
    }
`