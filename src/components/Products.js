import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookiepic from '../2ChocolateChipCookies.jpeg'

const Products = () => {
    return (
        <>
            <h1>View and Order Products</h1>
            <br/>
            <h4>Blurb about Products</h4>
            <h4>Order Process details</h4>
            <br/>
            <br/>
            <br/>
            <h1>Products with 'add to cart' button</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    Array.from({length: 4}).map((_, idx) => {
                        return (
                        <Col key={idx}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={cookiepic} />
                                <Card.Body>
                                    <Card.Title>Cookie name</Card.Title>
                                    <Card.Text>
                                    cookie description
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>price?</ListGroup.Item>
                                    <ListGroup.Item>Quantitiy?</ListGroup.Item>
                                    <ListGroup.Item>???</ListGroup.Item>
                                </ListGroup>
                                <Card.Body>
                                    <form>
                                        <Form.Label>Quantitiy</Form.Label>
                                        <Form.Control type="number" placeholder={0} min={0} style={{width: '40%'}}/>
                                        <Button type="submit">Add to Cart</Button>
                                    </form>
                                </Card.Body>
                            </Card>   
                        </Col>)
                    })
                }
                </Row>
        </>
    )
}

export default Products