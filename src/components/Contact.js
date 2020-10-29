import React from 'react'

// Bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
    return(
        <Container>
            <br/>
            <h2 className="mt-5">
                Let's Chat!
            </h2><hr/>
            <Form className="vh-100">
                <Row>
                    <Col sm={12} lg={6}>
                        <Form.Group>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="What do we call you?"></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type="email" placeholder="Your email through which we would connect"></Form.Control>
                            <Form.Text className="text-muted">
                                Psst... We will never share share your email with anyone else. Promise!
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Group>
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control type="text" placeholder="What do you want to talk about?"></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Description
                            </Form.Label>
                            <Form.Control as="textarea" placeholder="Tell us everything" rows={4}></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button block size="lg" variant="success">Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Contact