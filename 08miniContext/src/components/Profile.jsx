import React, {useContext} from 'react'
import UserContext from '../context/userContext';

function Profile() {

    const {user} = useContext(UserContext);

    //conditonal return
    if(!user) return <div>Please Login</div>
  
    return <div>welcome, {user.userName}</div>
}

export default Profile