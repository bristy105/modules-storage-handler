import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'



const Cosmetics = () => {
    const [cosmetics,setCosmetics]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
 
    const total =getTotal(cosmetics)
    console.log(total)

    return (
        <div className='cosmetics'>
             <h3>Welcome to Cosmetics store</h3>
             <p>Money needed: {total}</p>
            {
            cosmetics.map(cosmetic => <Cosmetic
            key={cosmetic.id}
            cosmetic={cosmetic}
           

            
            ></Cosmetic>) 
            }
        </div>
    );
};

export default Cosmetics;