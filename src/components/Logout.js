import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';

const Logout = () => {        
   const {push}=useHistory();

    const logout = () => {
        axios.post('http://localhost:5000/api/logout')
        .then(res =>{
            console.log(res)
            localStorage.clear()
            localStorage.removeItem('token')
            push('/login')
        })
        .else(push('/login'))
    }
    return(
    <div>
        <h1>Would you like to Logout?</h1>
        <button onClick = {logout}>Logout?</button>
    </div>
    )
}

export default Logout;