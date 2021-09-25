import React from 'react';
import './Cart.css'
const Cart = (props) => {  
    let totalQuantity = 0; 
    let total = 0; 
     for(const product of  props.carts){
         if(!product.quantity){
             product.quantity = 1;
         }
          total = total + product.price * product.quantity; 
         totalQuantity = totalQuantity + product.quantity 
     }
     const shopping =total > 0 ? 15:0;
     const tax = (total + shopping ) * 0.10;
     const grandTotal =  total + shopping + tax;  
    return (
        <div>
            <h3>Order Summary :</h3>
                <h5>Items Order : {totalQuantity}</h5>
                <p>total :{total.toFixed(2)}</p> 
                <p>shopping : {shopping}</p>
                <p>Tax {tax.toFixed(2)}</p>
                <p>Grandtotal : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;