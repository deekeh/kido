import React from 'react'

// Bootstrap
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return(
        <footer className="bg-primary text-white pt-5 pb-3">
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
                            <a href="#" className="text-white">CENTRES</a>
                        </h5>
                        <div>
                            <a href="#" className="text-white">London</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">Windsor</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">Houston</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">Dubai</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">Hong Kong</a>
                        </div>
                    </Col>
                    <Col className="mb-4 text-center" sm={"12"} md={"3"} lg={"3"}>
                        <h5>
                            <a href="#" className="text-white">ABOUT KIDO</a>
                        </h5>
                        <div>
                            <a href="#" className="text-white">Kido Home</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">FAQ</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">Careers</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">News &amp; Events</a>
                        </div>
                        <div>
                            <a href="#" className="text-white">Franchise</a>
                        </div>
                    </Col>
                    <Col className="mb-4 text-center" sm={"12"} md={"3"} lg={"3"}>
                        <h5>CONTACT</h5>
                        <div><a href="mailto:hello@kido.school" className="text-white bg-secondary p-1 rounded">hello@kido.school</a></div>
                        <address className="my-2">
                            199 Bishopsgate<br />
                            London, EC2M 3TY
                        </address>
                        <div><a href="#" className="text-white">YouTube</a></div>
                    </Col>
                </Row>
            </Container>
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