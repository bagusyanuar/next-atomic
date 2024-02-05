import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface IProps { image: string, to?: string }

const NavbarBrand = ({ image, to = '/'}: IProps) => {
    return (
        <SNavbarBrand href={to}>
            <Image src={image} height={50} width={50} alt='brand-image' />
        </SNavbarBrand>
    )
}

export default NavbarBrand

const SNavbarBrand = styled.a`
    cursor: pointer;
    text-decoration: none;

    img {
        width: 50px;
    }
`