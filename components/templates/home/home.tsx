import React from 'react'
import { Container } from '@/components/atoms/container'
import { Medias, Banners, Partnerships } from '@/components/molecules/modules/home'
import { CategoriesSection, TechnologiesSection, BestSellersSection, TestimonialsSection } from '@/components/organisms/modules/home'
import Layout from '../layout'
import styled from 'styled-components'
import { device } from '@/components/media'

function Home() {
    return (
        <Layout>
            <Container>
                <BanerHeroSection />
                <CategoriesSection />
                <TechnologiesSection />
                <BestSellersSection />
                <TestimonialsSection />
                <Medias className='mb-5' />
            </Container>
            <Partnerships />
        </Layout>
    )
}

export default Home

const BanerHeroSection = styled(Banners)`
    margin-bottom: 1rem;
    
    @media ${device.tablet} {
        margin-bottom: 2.5rem;
    }
`