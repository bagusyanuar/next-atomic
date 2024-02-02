import React from 'react'
import styled from 'styled-components'

interface IProps { text: string, to: string, className?: string }
const NavbarLink = ({
    text,
    to,
    className = ''
}: IProps) => {
    return (
        <SNavbarLink href={to} className={className}>{text}</SNavbarLink>
    )
}

export default NavbarLink

const SNavbarLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: var(--text-dark);
    background-color: white;
    font-weight: 700;
    font-size: 0.8rem;
    transition: all 0.2s ease-in;
    padding: 0.5rem 1.5rem;
    border-radius: 0.25rem;

    &:hover {
        color: white;
        background-color: var(--primary-color);
    }
`