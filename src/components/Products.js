import React, { useEffect, useState } from "react";
import { Button, CardGroup, Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookiepic from '../2ChocolateChipCookies.jpeg'

const Products = () => {

    const [cookies, setCookies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products').then(res => res.json())
        .then((data) => {
            setCookies(data)
        })
    },[])

    const cookieCards = cookies.map((cookie) => {
        return (
            <Col key={cookie.id} style={{marginBottom: '1%'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={cookiepic} />
                    <Card.Body>
                        <Card.Title>{cookie.name}</Card.Title>
                        <Card.Text>
                        {cookie.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>${cookie.price}</ListGroup.Item>
                        <ListGroup.Item>{cookie.box_count} cookies per box</ListGroup.Item>
                        <ListGroup.Item>???</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <form>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="number" placeholder={0} min={0} style={{width: '40%'}}/>
                            <Button type="submit">Add to Cart</Button>
                        </form>
                    </Card.Body>
                </Card>   
            </Col>)
    })

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
            <CardGroup style={{margin: '10%'}}>
                {/* <Row xs={1} md={3} className="g-4"> */}
                    {cookieCards}
                {/* </Row> */}
            </CardGroup>
        </>
    )
}

export default Products