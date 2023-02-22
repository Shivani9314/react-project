import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../redux-Slices/slices/loginSlice';


function Login() {

    const [username , setUser] = useState('')
    const [password , setPass] = useState('')

    const user = useRef();
    const pass = useRef();

    const dispatch = useDispatch();


    function handleSubmit(e){
        e.preventDefault();
        dispatch(createUser(
            {
                username,
                password
            }
        ))
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=> setUser(e.target.value)} type="text" placeholder='Enter your user name' ref={user} />
            <input onChange={(e)=> setPass(e.target.value)} type="password" placeholder='Enter Your password ' ref={pass} />
            <button onClick={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login;