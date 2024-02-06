import React from 'react'
import styled from 'styled-components'

type TTestimonial = {
    avatar: string
    name: string
    description: string
}

const TestimonialCard = () => {
  return (
    <STestimonialCard></STestimonialCard>
  )
}

export default TestimonialCard

const STestimonialCard = styled.div`
    width: 200px;
    height: 180px;
    border-radius: 10px;
    padding: 1rem 1.5rem;
    background-color: red;
`