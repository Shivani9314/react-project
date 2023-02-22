import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,removeToCart,removeCart } from '../../redux-Slices/Product/cartSlice';

function Product({product}) {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cartValue);
  const currItem = cart.find((item) => item.id === product.id);

  const curQuantity = currItem ? currItem.quantity : 0;

  const obj = {
      id: product.id,
      price: product.price,
  }

  return (
    <div className="SingleProduct">
            <img
                className="productImg"
                src={product.images}
                alt={product.title}
            />
            <div className="productInfo">
                <div>
                    <h2 className="productTitle">{product.title}</h2>
                    <p className="productPrice">${product.price}</p>
                    <p>Category: {product.category.name}</p>
                </div>

                <div className="cartBtn">
                    <button className='btn' onClick={() => dispatch(addToCart(obj))}>+</button>
                    <h2>{curQuantity}</h2>
                    <button className='btn' onClick={() => dispatch(removeToCart(obj))}>-</button>
                </div>
            </div>
        </div>
  )
}

export default Product