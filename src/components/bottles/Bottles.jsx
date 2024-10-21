import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import { addToLS, getStoredCart, removeFromLs } from "../../utilities/localStorage";
import Cart from "../cart/Cart";

const Bottles = () => {
   const [bottles, setBottles]= useState([]);
   // for showing added card
   const [cartItem, setCartItem]= useState([]);  
    useEffect(()=>{
          fetch('bottles.json')
          .then(res=> res.json())
          .then(data => setBottles(data))

    },[])

   // to load and  get new value from ls
    useEffect(()=>{
       // for get new value from localsorage
        if(bottles.length > 0){
            const stroredCart = getStoredCart();
            // new objects add to new array
            const savedCart =[];
            // 
            stroredCart.map((id)=>{
             
                 // for find an object by id
                 const bottle = bottles.find(bottle => bottle.id === id)
               
                 if(bottle){
                  savedCart.push(bottle)   
                 }
                 setCartItem(savedCart)
            })
        }
    },[bottles])
    
     const handleCart=(bottle)=>{
        const newCart =[...cartItem,bottle]
        setCartItem(newCart)
            // add data on local storage by click
            addToLS(bottle.id)
          
     }

//
     const handleRemoveFromCart = id =>{
        const remainingCart = cartItem.filter(bottle => bottle.id !== id)
        setCartItem(remainingCart)
        //
        removeFromLs(id);

     }

    return (
        <div>
            <h1>Total bottles : {bottles.length}</h1>
           <Cart cartItem={cartItem} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
           <div className="bottles">
               {
                   bottles.map(item => <Bottle key={item.id} bottle ={item} handleCart={handleCart}></Bottle> )
               }

           </div>
        </div>
    );
};

export default Bottles;