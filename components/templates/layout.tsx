import React, { useState } from 'react'
import Navbar from '@/components/organisms/navbar'
import Sidebar from '@/components/organisms/sidebar'
import Footer from '@/components/organisms/footer'
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
            {children}
            <Footer />
        </main>
    )
}

export default Layout