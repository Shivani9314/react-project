import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import './Nav.css'

function Nav() {
  return (
    <nav className='nav'>
        <div className='Banner'>Shopping Page</div>
        <div className='right-layout'>
          <div className='cart-layout'>
            <AiOutlineShoppingCart/>
            <p>0</p>
          </div>
        </div>
        
    </nav>
  )
}

export default Nav;