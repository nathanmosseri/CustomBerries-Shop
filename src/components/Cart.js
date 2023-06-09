import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {

    const [cartData, setCartData] = useState([])
    const [itemDeleted, setItemDeleted] = useState(false)
    const [cartDeleted, setCartDeleted] = useState(false)

    const sess_id = localStorage.getItem('sess_id')

    useEffect(() => {
        fetch(`http://localhost:3000/carts/${sess_id}`).then(res => res.json())
        .then((data) => {
            setCartData(data)
        })
    }, [itemDeleted, cartDeleted])

    let total = 0
    if(cartData.error){
        total = 0
    } else{
        cartData.forEach((item) => {
            let itemTotal = item.item.price * item.quantity
            total += itemTotal
        })
    }

    const handleDeleteItem = (e, id) => {
        fetch(`http://localhost:3000/cart_items/${id}`, {
            method: 'DELETE'
        }).then(() => setItemDeleted(prev => !prev))
    }

    const handleDeleteCart = (e, id) => {
        fetch(`http://localhost:3000/carts/${id}`, {
            method: 'DELETE'
        }).then(() => setCartDeleted(prev => !prev))
    }

    return (
        <>
            {
                cartData.error ? 
                    <div>
                    <h1>Cart Empty</h1>
                    </div>
                    : 
                    <div>
                    {cartData.map((item) => {
                        return (
                            <div key={uuidv4()}>
                                <h1>{item.item.name}</h1>
                                <p>{item.quantity}</p>
                                <p>${item.item.price * item.quantity}</p>
                                <button onClick={(e) => handleDeleteItem(e, item.cart_item)}>Remove from Cart</button>
                                <h1></h1>
                            </div>
                        )
                    })}
                    <h1>Total: ${total}</h1>
                    <button onClick={(e) => handleDeleteCart(e, sess_id)}>Clear Cart</button>
                    </div>
            }
        </>
    )
}

export default Cart