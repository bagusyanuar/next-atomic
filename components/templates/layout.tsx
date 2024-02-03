import React, { useState } from 'react'
import { SidebarBackdrop } from '@/components/atoms/backdrop'
import Navbar from '@/components/organisms/navbar'
import Sidebar from '@/components/organisms/sidebar'

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
        </main>
    )
}

export default Layout