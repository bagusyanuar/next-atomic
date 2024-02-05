import React from 'react'
import styled from 'styled-components'
import { fontSize } from '@/components/constant'

interface IProps { text: string, className?: string }
const SectionTitle = ({ text, className = '' }: IProps) => {
  return (
    <SSectionTitle className={className}>
      {text}
    </SSectionTitle>
  )
}

export default SectionTitle

const SSectionTitle = styled.h1`
    color: var(--primary-color);
    font-size: ${fontSize.large};
    font-weight: 600;
    text-align: center;
`