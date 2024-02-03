import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SidebarBackdrop } from '@/components/atoms/backdrop'

interface IProps { show: boolean, onBackdropClick?: () => void }

function Sidebar({
    show,
    onBackdropClick = () => { }
}: IProps) {
    const [showBackdrop, setShowBackdrop] = useState<boolean>(show)
    const [showSidebar, setShowSidebar] = useState<boolean>(show)

    const showEvent = () => {
        if (show) {
            setShowBackdrop(true)
            setTimeout(() => {
                setShowSidebar(true)
            }, 100);
        } else {
            setShowSidebar(false)
            setTimeout(() => {
                setShowBackdrop(false)
            }, 200);
        }
    }

    useEffect(() => {
        showEvent()
        console.log(show);
    }, [show])

    return (
        <SidebarBackdrop show={showBackdrop} onClick={onBackdropClick}>
            <SidebarWrapper $show={showSidebar}>
            </SidebarWrapper>
        </SidebarBackdrop>
    )
}

export default Sidebar

const SidebarWrapper = styled.div<{ $show: boolean }>`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 100vh;
    background-color: white;
    padding: 1rem 0.5rem;
    transform: ${({ $show }) => $show ? 'translateX(0%)' : 'translateX(-100%)'};
    transition: transform 0.2s ease-in-out;
    z-index: 9999;
`