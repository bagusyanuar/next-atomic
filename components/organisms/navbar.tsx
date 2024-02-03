import React from 'react'
import styled from 'styled-components'
import { device } from '@/components/media'
import { NavbarButton } from '@/components/atoms/button'
import { NavbarBrand, NavbarLink } from '@/components/atoms/link'
import { NavbarMenu, NavbarAction } from '@/components/molecules/navbar'

interface IProps { onTriggerClick?: () => void }
const Navbar = ({
    onTriggerClick = () => { }
}: IProps) => {
    return (
        <NavbarWrapper>
            <NavbarButton icon='bx-menu' className='sidebar-trigger' onClick={onTriggerClick} />
            <NavbarBrand image='/assets/icons/brand.png' to='/' />
            <NavbarMenu>
                <NavbarLink text='PRODUCT' to='/product' />
                <NavbarLink text='COMMUNITY' to='/community' />
                <NavbarLink text='AGENT' to='/agents' />
                <NavbarLink text='ABOUT' to='/about' />
            </NavbarMenu>
            <NavbarAction />
        </NavbarWrapper>
    )
}

export default Navbar

const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;

    .sidebar-trigger {
        display: flex;

        @media ${device.tablet} {
            display: none;
        }
    }

`