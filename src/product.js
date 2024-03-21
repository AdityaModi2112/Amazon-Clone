import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

function Product({id,image,name,star,price,mrp}) {
  const[{basket},dispatch]=useStateValue();
  console.log("This is the basket:",basket);
  const addToBasket =()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
      id:id,
      image:image,
      name:name,
      rating:star,
      price:price,
      mrp:mrp,
      },
    });
  };
  return (
    <span className="options">
        <img className="div_image" 
      src={image} alt=""/>
        <p>{name}</p>
        <div className="product_rating">
            {Array(star)
            .fill()
            .map((_,i)=>(
                <small className="fa fa-star checked"></small>
            ))
            }
        </div>
        <small>&#8377; <big>{price}</big></small>
        <small>M.R.P.:<span className="lining">&#8377;{mrp}</span></small>
        <button onClick={addToBasket}>Add to Cart</button>
        </span>
  )
}

export default Product;
