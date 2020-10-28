import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'

const KidoNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="xl">
            <Navbar.Brand href="#">
                Kido
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default KidoNavbar