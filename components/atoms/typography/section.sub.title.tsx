import React from 'react'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'
import { device } from '@/components/media'

interface IProps { text: string, className?: string }
const SectionSubTitle = ({ text, className = '' }: IProps) => {
    return (
        <SSectionSubTitle className={className}>
            {text}
        </SSectionSubTitle>
    )
}

export default SectionSubTitle

const SSectionSubTitle = styled.p`
    color: var(--text-dark);
    font-size: ${fontSize.extraSmall};
    text-align: center;

    @media ${device.tablet} {
        font-size: ${fontSize.small};
    }
`