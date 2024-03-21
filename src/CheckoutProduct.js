import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct({id,image,name,rating,price,mrp}) {
  return (
    <div className='checkoutProduct'> 
    <div className='checkLeft'>
      <div className='checkout_image'>
        <img src={image} alt=""/>
      </div>
      </div>
      <div className='checkright'>
      <div className='checkout_name'>
        <p>{name}</p>
      </div>
      <div className='checkout_price'>
        <small>price:&#8377;</small>
        <strong>{price}</strong>
      </div>
      <div className='checkout_mrp'>
      <small>mrp:</small>
        <strong>&#8377;{mrp}</strong>
      </div>
      <div className='checkout_rating'>
      {Array(rating)
            .fill()
            .map((_,i)=>(
                <small className="fa fa-star checked"></small>
            ))
            }
      </div>
      <button>Remove the item</button>
      </div>
    </div>
  )
}

export default CheckoutProduct;
