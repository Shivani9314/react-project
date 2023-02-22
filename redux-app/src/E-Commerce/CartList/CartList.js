import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart';

function CartList() {
    const cart = useSelector(state => state.cartReducer.cartValue)
    console.log("under cart list", cart)

    let cnt = 0, subtotal = 0, tax = 0;
    let total = 0;

    cart.forEach(element => {
        cnt += element.quantity;
        subtotal += element.price;
    });

    tax = (subtotal*18)/100
    total = subtotal - tax;


  return (
    <div className="container">
    <header>
        <h1>Shopping Cart</h1>
        <div className="path">
            <p>Home  Shopping Cart</p>
            <p>{cnt} items in the bag</p>
        </div>
        <hr />

        <div className="cartList">
            {cart.map((item) => (
                <Cart key={item.id} cart={item} />
            ))}
        </div>

        <div className="footer">
            <div className="promoCode">
                <p>Have a Promo Code?</p>
                <div className="inputText">

                    <input type="text" />
                    <button>Done</button>
                </div>

            </div>

            <div className="totalBox">

                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{subtotal}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>18%</td>
                    </tr>
                    <tr className='lastTR'>
                        <td>Total</td>
                        <td>{total}</td>
                    </tr>
                </table>

                <button className='checkOut'>Check Out</button>
            </div>
        </div>

    </header>
</div>
  )
}

export default CartList