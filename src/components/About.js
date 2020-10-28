import React from "react";

// Bootstrap
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const About = () => {
    // get people data
    const people = [
        {
            name: "Michael Scott",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img: 'https://picsum.photos/200/200'
        },
        {
            name: "Monica Geller",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img: 'https://picsum.photos/300/300'
        },
        {
            name: "Sheldon Cooper",
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img: 'https://picsum.photos/400/400'
        }
    ]

    return(
        <Container mt={6}>
            <br/>
            <section className="mb-4">
                <h2>
                    About Us
                </h2><hr/>
                <p>
                    We are owned and operated by a group of parents from all over the world. Our founders were unhappy with the quality of the early childhood education available in their cities, so they got together to build a truly 21st century program.
                </p>
                <p>
                    We now have schools around the globe, which bring together the world’s best early years practices to deliver the finest preschool experience for children and parents alike.
                </p>
            </section>
            <section className="mb-4">
                <h2>
                    Our Team
                </h2><hr/>
                <Row>
                    {people.map(p => (
                        <Col sm={12} md={6} lg={4}>
                            <Card className="mb-2">
                                <Card.Img variant="top" src={p.img} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <hr/>
                                    <Card.Text>
                                        {p.description}
                                    </Card.Text>
                                    <Button size={"small"} variant="primary">More about {p.name}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    )
}

export default About