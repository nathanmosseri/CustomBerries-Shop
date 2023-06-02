import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {

    const [cartData, setCartData] = useState([])

    const sess_id = localStorage.getItem('sess_id')

    useEffect(() => {
        fetch(`http://localhost:3000/carts/${sess_id}`).then(res => res.json())
        .then((data) => {
            setCartData(data)
        })
    }, [])

    let total = 0
    cartData.forEach((item) => {
        let itemTotal = item.item.price * item.quantity
        total += itemTotal
    })

    

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
                                <h1></h1>
                            </div>
                        )
                    })}
                    <h1>Total: ${total}</h1>
                    </div>
            }
        </>
    )
}

export default Cart