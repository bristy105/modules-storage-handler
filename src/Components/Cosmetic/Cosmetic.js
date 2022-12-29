import React from 'react';
import './Cosmetic.css'
import { addToDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name, price,id}= props.cosmetic
    const addToCart= (id) =>{
        addToDb(id)
            
        console.log('id added',id);}
    const addToCartWithParam = () => addToCart(id);
  
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for:  ${price}</p>
            <button onClick={addToCartWithParam}>Add to Cart</button>
            <button onClick={()=>addToCart(id)}>purchase</button>

            
        </div>
    );
};

export default Cosmetic;