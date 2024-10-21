import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({cartItem,handleRemoveFromCart}) => {
    console.log(cartItem)
    return (
        <div>
            <h3>Card : {cartItem.length}</h3>
            <div className="w-10"style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
                 {
                   cartItem.map( item => <div key={item.price}  ><img  src={item.img}></img> <p>Price :  {item.price}</p> <button onClick={()=>handleRemoveFromCart(item.id)} type="button" style={{padding:'10px 18px', border:'1px solid green'}}>Remove</button>  </div> ) 
                 }
                 
            </div>
        </div>
    );
};
//for handle proptype error
Cart.propTypes ={
    //props name
    cartItem : PropTypes.array.isRequired,
    handleRemoveFromCart:PropTypes.func.isRequired
}





export default Cart;