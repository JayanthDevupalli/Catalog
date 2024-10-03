import React from "react";
import sofaImage from './images/sofa.jpg';
import beltImage from './images/belt.jpg';
import './cart.css';

export const Cart = () => {
  return (
    <section className="cart">
      <h1>My Shopping Cart</h1>
      <div className="cart-products">
        <ProductCard
          image={sofaImage}
          name="Sofa"
          price="1,00,000 Rs/-"
          buttonText="Remove"
        />
        <ProductCard
          image={beltImage}
          name="Belt"
          price="10,000 Rs/-"
          buttonText="Remove"
        />
      </div>
      <div className="total">
        <h3>Total: <span className="total-amount">1,10,000.00 Rs/-</span></h3>
        <button className="checkout-btn">Checkout</button>
      </div>
    </section>
  );
};

const ProductCard = ({ image, name, price, buttonText }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-details">
        <h2>{name}</h2>
        <p>{price}</p>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};