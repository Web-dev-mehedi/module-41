import './bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle,handleCart}) => {
    const {img,name,price,shipping, ratings,stock,seller}= bottle
    return (
        <div className='bottle'>
              <img src={img} alt="" />
              <h3> Name : {name}</h3> 
              <p>Price : ${price}</p> 
              <p>Shipping: {shipping}</p>
              <p>Ratings : {ratings}</p>
              <span>Stocks : {stock}</span> 
              <span>Seller : {seller}</span>
              <button onClick={()=>handleCart(bottle)} >Add to Cart</button>
        </div>
    );
};
//for handle proptype error
Bottle.propTypes = {
    //props name
  bottle : PropTypes.object.isRequired,
  handleCart :PropTypes.func.isRequired
}

export default Bottle;