import React, { useState } from 'react'
import Navbar from '@/components/organisms/navbar'
import Sidebar from '@/components/organisms/sidebar'
import styled from 'styled-components'
import { device } from '@/components/media'

interface IProps { children: React.ReactNode }

function Layout({ children }: IProps) {
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    const handleTriggerClick = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <main>
            <Navbar onTriggerClick={handleTriggerClick} />
            <Sidebar show={showSidebar} onBackdropClick={handleTriggerClick} />
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </main>
    )
}

export default Layout

const ContentWrapper = styled.div`
    min-height: 550px;
    padding: 1rem 2rem;

    @media ${device.tablet} {
        padding: 1rem 5rem;
    }
`