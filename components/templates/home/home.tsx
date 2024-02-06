import React from 'react'
import { BannerHero } from '@/components/molecules/banner'
import Categories from '@/components/organisms/categories'
import Technologies from '@/components/organisms/technologies'
import BestSeller from '@/components/organisms/best.seller'
import Testimonials from '@/components/organisms/testimonials'
import Layout from '../layout'
import styled from 'styled-components'
import { device } from '@/components/media'

function Home() {
    return (
        <Layout>
            <StyledBanerHero />
            <Categories />
            <Technologies />
            <BestSeller />
            <Testimonials />
        </Layout>
    )
}

export default Home

const StyledBanerHero = styled(BannerHero)`
    margin-bottom: 1rem;
    
    @media ${device.tablet} {
        margin-bottom: 2.5rem;
    }
`