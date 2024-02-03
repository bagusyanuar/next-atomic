import React from 'react'
import styled from 'styled-components'

interface IProps { children: React.ReactNode, show: boolean }
const Sidebar = ({
    children,
    show
}: IProps) => {
    return (
        <SSidebar $show={show}>
            {children}
        </SSidebar>
    )
}

export default Sidebar

const SSidebar = styled.div<{ $show: boolean }>`
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
`