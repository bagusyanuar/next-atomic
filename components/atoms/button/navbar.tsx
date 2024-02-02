import React from 'react'
import styled from 'styled-components'

interface IProps { icon: string, onClick?: () => void, children?: React.ReactNode, className?: string }

const NavbarButton = ({
    icon,
    onClick = () => { },
    children,
    className = ''
}: IProps) => {
    return (
        <SNavbarButton
            href='#'
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
            className={className}
        >
            <i className={`bx ${icon}`}></i>
            {children}
        </SNavbarButton>
    )
}

export default NavbarButton

const SNavbarButton = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: var(--text-dark);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(220, 220, 220, 0.3)
    }
`