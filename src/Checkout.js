import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h2>Shopping Cart</h2>
        <div className="delete_line">
            <div className="delete_line_left">
                <p>Deselect all items</p>
            </div>
            <div className="delete_line_right">
                <p>Price</p>
            </div>
        </div>
        <div className="line">
        </div>
        <div>
          {basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            mrp={item.mrp}
            rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout;
