import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <>
            <Navbar variant="light" expand='lg' style={{backgroundColor: 'linen'}}>
                <Container>
                <Navbar.Brand href="/"><img src=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/kosher-certification">Kosher Certification</Nav.Link>
                        <Nav.Link href="cart">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header