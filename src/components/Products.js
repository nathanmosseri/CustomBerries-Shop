import React, { useEffect, useState } from "react";
import { Button, CardGroup, Col, Form, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookiepic from '../2ChocolateChipCookies.jpeg'

const Products = () => {

    const [cookies, setCookies] = useState([])
    const [cookieOrder, setCookieOrder] = useState({
        product_id: '',
        quantity: 0,
        sess_id: ''
    })

    useEffect(() => {
        fetch('http://localhost:3000/products').then(res => res.json())
        .then((data) => {
            setCookies(data)
        })
    },[])

    const handleChange = (e, pId) => {
        setCookieOrder({
            ...cookieOrder,
            [e.target.name]: e.target.value,
            product_id: pId,
            sess_id: localStorage.getItem('sess_id')
        })
    }
    console.log(cookieOrder)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/cart_items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cookieOrder)
        }).then(res => res.json())
        .then((data) => {
            setCookieOrder({
                product_id: '',
                quantity: 0,
                sess_id: ''
            })
        })
    }

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
                        <form onSubmit={handleSubmit}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control name="quantity" type="number" placeholder={0} min={0} style={{width: '40%'}} onChange={(e) => handleChange(e, cookie.id)}/>
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
                    {cookieCards}
            </CardGroup>
        </>
    )
}

export default Products