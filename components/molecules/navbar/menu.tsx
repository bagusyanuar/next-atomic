import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'

interface IProps { children: React.ReactNode, className?: string }
const NavbarLinks = ({ children, className = '' }: IProps) => {
    return (
        <NavbarLinkWrapper className={className}>
            {children}
        </NavbarLinkWrapper>
    )
}

export default NavbarLinks

const NavbarLinkWrapper = styled.div`
    display: none;
    align-items: center;
    gap: 0.25rem;

    @media ${device.tablet} {
        display: flex;
    }
`