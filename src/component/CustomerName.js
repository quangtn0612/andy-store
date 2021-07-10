import React from 'react'
import { Button, Input } from 'reactstrap';

function CustomerName(props) {
  const { onKeyUp, updateCart, Name } = props;
  
  return (
    <div>
      <Input 
        type="text" 
        onChange={event => onKeyUp(event)}
        placeholder={'Type your name'} 
        value={Name}
      />
      {/* cart */}

      {/* {({ updateCart }) => } */}
      <Button className="AddToCartButton" color="primary" onClick={updateCart}>Add to cart</Button>

    </div>
  )
}

export default CustomerName
