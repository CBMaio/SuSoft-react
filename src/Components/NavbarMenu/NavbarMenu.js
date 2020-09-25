import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const NavbarMenu = () => {
    return(
        <NavbarBg variant="dark">
            <Navbar.Brand href="#home">SuSoft</Navbar.Brand>
            <Nav className="d-flex justify-content-center justify-content-md-start w-100">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Trabajos</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
        </NavbarBg>
    );
};

export default NavbarMenu;

const NavbarBg = styled(Navbar)`{
    background-color: #344955;
    border-bottom: 3px solid #F9AA33;
    font-size: 18px;
    position: relative;
    z-index: 1;
    height: 10vh;
}`;

