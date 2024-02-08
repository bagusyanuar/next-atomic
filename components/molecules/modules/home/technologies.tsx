import React from 'react'
import styled from 'styled-components'
import { TechnologyCard } from '@/components/atoms/card'
import { device } from '@/components/media'

interface IProps { className?: string }

const Technologies = ({ className = '' }: IProps) => {
    return (
        <Wrapper className={className}>
            <TechnologyCard icon='/assets/technologies/award.png' title='SNI' description='Yuspin bukan obat dan bukan makanan maka tidak memerlukan BPOM/depkes  Yuspin telah teruji laboratorium bebas klorin sesuai uji SNI.' />
            <TechnologyCard icon='/assets/technologies/microscope.png' title='Labolatorium Tested' description='Yuspin telah melalui uji klinis laboratorium sesuai uji SNI' />
            <TechnologyCard icon='/assets/technologies/flask.png' title='Bebas Klorin' description='Bahan baku Yuspin telah teruji laboratorium bebas klorin sesuai uji SNI.' />
            <TechnologyCard icon='/assets/technologies/sanitary-pad.png' title='Anti Bacterial Silver +' description='Yuspin dirancang dengan anti bacterial silver +, technology Silver+ ini sudah teruji secara Internasional diuji secara klinis di Jerman' />
        </Wrapper>
    )
}

export default Technologies

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    @media ${device.tablet} {
        gap: 1.25rem;
    }
`