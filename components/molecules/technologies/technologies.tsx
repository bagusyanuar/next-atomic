import React from 'react'
import styled from 'styled-components'
import { TechnologyCard } from '@/components/atoms/card'

const Technologies = () => {
    return (
        <Wrapper>
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
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`