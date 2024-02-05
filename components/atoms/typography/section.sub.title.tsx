import React from 'react'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'

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
    font-size: ${fontSize.small};
    text-align: center;
`