//use localStorage to manage data
const addToDb= id =>{
    let shoppingCart ={} ;
    //get the shopping cart
    const storedCart= localStorage.getItem('shopping-cart');
    if (storedCart){
        shoppingCart=JSON.parse(storedCart);
    }
    else{
        shoppingCart ={}
    }
   
    const quantity = shoppingCart[id];
   // console.log(quantity)

    if (quantity){
        
        const newquantity = (quantity) + 1
        shoppingCart[id] =newquantity
        //localStorage.setItem(id,newquantity)
    }
    else{
        shoppingCart[id] = 1
        //localStorage.setItem(id,1);
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

    
}

const removeFromDb = id =>{
    console.log('inside fake db')
    const storedCart =localStorage.getItem('shopping-cart');
    
    
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart)
        if (id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))


        }
        

    }
    else{

    }


}
export {removeFromDb,addToDb}
