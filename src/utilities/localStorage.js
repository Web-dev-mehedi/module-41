

//for checking data on local storage
const getStoredCart = ()=>{
    const storedCartst = localStorage.getItem('cart');
//condition if data have on localstorage or not
    if(storedCartst){
        return JSON.parse(storedCartst)
    }
    return [];
}


const saveCartToLS=(cart)=>{
   //save to localstorage
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem('cart', cartStringified);

}



//for add to local storage
const addToLS = id =>{
    // for recive an array
    const cart =getStoredCart();
  //to add new value to ls array
    cart.push(id);
    saveCartToLS(cart)
}

// for remove by btn click
const removeFromLs = (id)=>{
    const cart = getStoredCart();
    const remaining= cart.filter(idx => idx !== id)
    // for update new data
    saveCartToLS(remaining)
}

export {addToLS,getStoredCart,removeFromLs}
