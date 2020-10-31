import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return(
        <footer className="bg-primary text-white pt-5 pb-3">
            <Router>
                <Container>
                    <Row>
                        <Col className="mb-4" sm={"12"} md={"3"} lg={"3"}>
                            <h5>OPEN YOUR OWN KIDO CENTER</h5>
                            <strong>
                            Are you interested in operating your own preschool? Head to our franchise website to learn how you can launch your own Kïdo school.
                            </strong>
                        </Col>
                        <Col className="mb-4 text-center" sm={"12"} md={"3"} lg={"3"}>
                            <h5>
                                <Link to="/" className="text-white">CENTRES</Link>
                            </h5>
                            <div>
                                <Link to="/" className="text-white">London</Link>
                            </div>
                            <div>
                                <Link to="/" className="text-white">Windsor</Link>
                            </div>
                            <div>
                                <Link to="/" className="text-white">Houston</Link>
                            </div>
                            <div>
                                <Link to="/" className="text-white">Dubai</Link>
                            </div>
                            <div>
                                <Link to="/" className="text-white">Hong Kong</Link>
                            </div>
                        </Col>
                        <Col className="mb-4 text-center" sm={"12"} md={"3"} lg={"3"}>
                            <h5>
                                <Link to="/about" className="text-white">ABOUT KIDO</Link>
                            </h5>
                            <div>
                                <Link to="/" className="text-white">Kido Home</Link>
                            </div>
                            <div>
                                <Link to="/contact" className="text-white">FAQ</Link>
                            </div>
                            <div>
                                <Link to="/contact" className="text-white">Careers</Link>
                            </div>
                            <div>
                                <Link to="/about" className="text-white">News &amp; Events</Link>
                            </div>
                            <div>
                                <Link to="/about" className="text-white">Franchise</Link>
                            </div>
                        </Col>
                        <Col className="mb-4 text-center" sm={"12"} md={"3"} lg={"3"}>
                            <h5>
                                <Link to="/contact" className='text-white'>CONTACT</Link>
                            </h5>
                            <div><a href="mailto:hello@kido.school" className="text-white bg-secondary p-1 rounded">hello@kido.school</a></div>
                            <address className="my-2">
                                199 Bishopsgate<br />
                                London, EC2M 3TY
                            </address>
                            <div>
                                <Link to="/" className="text-white">YouTube</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Router>
            <hr/>
            <Container className="mb-0">
                <Row>
                    <Col sm={"9"}>
                        Terms and conditions
                    </Col>
                    <Col sm={"3"}>
                        &copy; 2020 Kïdo | All rights reserved
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer