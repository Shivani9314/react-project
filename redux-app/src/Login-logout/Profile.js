import React from 'react'
import { useSelector } from 'react-redux';


function Profile() {

const users = useSelector((state) => state.loginReducer.users);
  return (
    <div>
        {users.map((user,i) =>{
            return <div>
                <p>{user.username}</p>
                <p>{user.password}</p>
            </div>
        })}
    </div>
  )
}

export default Profile;