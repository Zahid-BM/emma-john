import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddBtn, productItem } = props;
    const { img, name, price, seller, ratings } = productItem;
    console.log(handleAddBtn);
    return (
        <div className='product-info'>
            <img className='product-img' src={img} alt="" />
            <div className='product-description'>
                <p className='product-name'>{name}</p>
                <p>Price : $ {price} </p>
                <p ><small>Manufacturer : {seller}</small></p>
                <p ><small>Rating : {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddBtn(props.productItem)} className='add-button'>Add to cart  
                <span className='shopping-cart-icon'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span>
            </button>
        </div>
    );
};

export default Product;