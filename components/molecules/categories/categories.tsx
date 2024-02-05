import React from 'react'
import styled from 'styled-components'
import { CategoryCard } from '@/components/atoms/card'

interface IProps { className?: string }

const Categories = ({ className = '' }: IProps) => {
    return (
        <Wrapper className={className}>
            <CategoryCard image='/assets/categories/category-1.png' text='Category 1' />
            <CategoryCard image='/assets/categories/category-2.png' text='Category 2' />
            <CategoryCard image='/assets/categories/category-3.png' text='Category 3' />
        </Wrapper>
    )
}

export default Categories

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
`