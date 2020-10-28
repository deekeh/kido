import React from 'react'
import {Link} from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const KidoNavbar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="xl">
            <Navbar.Brand href="#">
                Kïdo
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Link to="/">
                        <li className="nav-item">
                            <span className="nav-link">Home</span>
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-item">
                            <span className="nav-link">About</span>
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="nav-item">
                            <span className="nav-link">Contact</span>
                        </li>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default KidoNavbar