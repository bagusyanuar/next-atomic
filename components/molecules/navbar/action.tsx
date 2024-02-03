import React from 'react'
import styled from 'styled-components'
import { NavbarButton } from '@/components/atoms/button'

const NavbarAction = () => {
    return (
        <NavbarActionWrapper>
            <NavbarButton icon='bx-cart' />
            <NavbarButton icon='bx-user' />
        </NavbarActionWrapper>
    )
}

export default NavbarAction

const NavbarActionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
`