import React from 'react'

// CSS
import '../static/css/home.css'

// Bootstrap
import { Container } from "react-bootstrap";

const Home = () => {
    return(
        <section>
            <Container className="main bg-light vh-100 d-flex" fluid mt={6}>
                <div className="main-in container my-auto">
                    <h2 className="bg-light text-dark rounded p-2">Welcome to Kido</h2>
                    <h4 className="bg-light text-dark rounded p-2">Lighting up your child's early years</h4>
                    <p className="bg-light text-dark rounded p-2">
                        We are dedicated to providing the highest quality early years education and care in the world.
                    </p>
                </div>
            </Container>
        </section>
    )
}

export default Home