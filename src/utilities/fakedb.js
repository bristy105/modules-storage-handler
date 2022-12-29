//use localStorage to manage data
const addToDb= id =>{
    
    const quantity = localStorage.getItem(id);
    if (quantity){
        
        const newquantity = parseInt(quantity) + 1
        localStorage.setItem(id,newquantity)
    }
    else{
        localStorage.setItem(id,1);
    }
    
}

export {addToDb}