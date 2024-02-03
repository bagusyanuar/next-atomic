import React from 'react'
import styled from 'styled-components'

interface IProps { children: React.ReactNode, show: boolean, onClick?: () => void }
const Sidebar = ({
    children,
    show,
    onClick = () => { }
}: IProps) => {
    return (
        <SSidebar $show={show} onClick={onClick}>
            {children}
        </SSidebar>
    )
}

export default Sidebar

const SSidebar = styled.div<{ $show: boolean }>`
    display: ${({ $show }) => $show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9998;
    background-color: rgba(0, 0, 0, 0.5);
`