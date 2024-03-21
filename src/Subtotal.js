import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
      renderText={(value)=>(
        <>
        <p>
            Subtotal({basket.length} items): <strong>{value}</strong>
        </p>
        <strong className='subtotal_gift'>
            <input type="checkbox"/>This order contains a gift
        </strong>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={""}
      />
      <button>Proceed To Buy</button>
    </div>
  )
}

export default Subtotal;
