import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {AiFillDelete} from "react-icons/ai"
import { addToCart,removeToCart,removeCart } from '../../redux-Slices/Product/cartSlice';

function Cart({cart}) {


  const data = useSelector((state) => state.productReducer.products)
  const dispatch = useDispatch();
  const currCart = data.find((item) => item.id === cart.id);
  console.log(cart)

  const obj = {
    id : cart?.id,

    price : currCart.price,


  }
    
  return (
    <>
    <div>
      <div className="leftBox">

          <div className="image">
              <img src={currCart.images} alt="" />
          </div>
            <div className="productDetails">
              <p className="productName">{currCart.title}</p>
              <p className="productDes"> {currCart.description}</p>
              <p className="productPrice">
                ${currCart.price}
              </p>
            </div>
      </div>
      <div className="rightBox">

        <div className="cartBtn">
          <button className='btn' onClick={() => dispatch(addToCart(obj))}>+</button>
            <div className="box">
              <span>{cart.quantity}</span>
            </div>
          <button className='btn' onClick={() => dispatch(removeToCart(obj))}>-</button>
          </div>
         <div className="remove" onClick={() => dispatch(removeCart(obj))}>
          <AiFillDelete />
         </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Cart;