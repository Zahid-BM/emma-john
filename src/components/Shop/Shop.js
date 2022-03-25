import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    const handleAddBtn = (item) => {
        console.log(item);
        // cart.push(item); /* generally we push item to an array to add into */
        const newCart = [...cart, item];
        setCart(newCart);
    }
    return (
        <div className='shop-component'>
            <div className="product-container">
                {
                    items.map(item => <Product productItem={item} key={item.id} handleAddBtn={handleAddBtn}></Product>)
                }
            </div>
            <div className="cart-container">
                <h5 className='Order-summery'>Order Summery</h5>
                <div className='order-info'>
                    <p>Selected items : {cart.length}</p>
                    <p>Total price : $</p>
                    <p>Total Shipping Charge: $</p>
                    <p>Tax : $</p>
                    <h6 className='grand-total'>Grand total : $</h6>
                </div>
                <div class="d-grid gap-2">
                    <button className="btn-clear btn btn-danger " type="button">Clear Items</button>
                    <button className="btn-review btn btn-warning" type="button">Review Orders</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;