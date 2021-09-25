import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import Rating from 'react-rating';
const Product = (props) => { 
    console.log(props)
    const {name , img , seller, stock, price, star} = props.product; 
    const element = <FontAwesomeIcon icon={faShoppingCart} />   
    return (
        <div className="product">
            <div>
            <img src={img} alt="" /> 
            </div>
            <div>
            <h3 className="product-name">{name}</h3>
            <p><small> By:{seller}</small></p> 
            <p>price :{price}</p>
            <p><small> only {stock} left in stock - order soon this </small></p>
            <Rating 
             readonly   
             initialRating = {star}
             fullSymbol="fas fa-star icon-color" 
             emptySymbol="far fa-star icon-color"
            ></Rating>    
             <button    onClick={ () => props.handleAddButton(props.product)} className="btn-regular"> {element} Add to cart</button>
            </div>
         </div>
    );
};

export default Product;