import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css'
 const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart , setCart] = useState([]) 
    const [displayProducts, setDisplayProducts] = useState([])
    useEffect(() => {
         fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setDisplayProducts(data)
         }) 
    },[]);
     useEffect(()=> {
         
        if(products.length){
            const savedCart = getStoredCart()
            const storedCart = [];
            for (const key in savedCart){
                 const addProduct = products.find(product => product.key === key);
                if(addProduct){
                    const quantity = savedCart[key] ;
                    addProduct.quantity = quantity;
                     storedCart.push(addProduct) 
                }
        }
        setCart(storedCart) 
         }
     },[products])
    const handleAddButton = pruduct => { 
        const newCart =  [...cart, pruduct] 
        setCart(newCart)
        // save to local stroage (for now)
        addToDb(pruduct.key)
     }
      const handleSearch = event => {
            const searchText =  event.target.value;
             const matchSearch = products.filter(product => 
                 product.name.toLowerCase().includes(searchText.toLowerCase()))
                 setDisplayProducts(matchSearch)
       }
    return (
      <div>
          <div className="search-container">
              <input onChange ={handleSearch} type="text" placeholder="search field" />
          </div>
             <div className="shop-container"> 
            <div className="product-container">
             {displayProducts.map(product => <Product product={product}
             handleAddButton = {handleAddButton}
             key = {product.key}
            ></Product>
             )}
            </div>
            <div className="cart-container">
                <Cart cart ={cart.length}  carts = {cart}></Cart>
            </div> 
        </div>
      </div>
    );
};

export default Shop; 