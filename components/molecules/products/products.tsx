import React from 'react'
import styled from 'styled-components'
import { ProductCard } from '@/components/atoms/card'

interface IProps { className?: string }
const Products = ({ className = '' }: IProps) => {

    const dummyData: Array<any> = [
        {
            image: '/assets/product/sample-1.jpg',
            name: 'Product 1',
            price: 125000,
            agents: ['Jakarta', 'Surabaya'],
            rate: 3,
            sold: 10
        },
        {
            image: '/assets/product/sample-2.jpg',
            name: 'Product 2',
            price: 2500000,
            agents: ['Medan', 'Malang'],
            rate: 4.5,
            sold: 120
        },
        {
            image: '/assets/product/sample-3.jpg',
            name: 'Product 3',
            price: 5400000,
            agents: ['Jogjakarta', 'Surabaya'],
            rate: 5,
            sold: 8
        },
    ]
    return (
        <Wrapper>
            <ProductCard data={dummyData[0]} />
            <ProductCard data={dummyData[1]} />
            <ProductCard data={dummyData[2]} />
        </Wrapper>
    )
}

export default Products

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.25rem;
`