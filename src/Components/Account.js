import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Account=(props)=>{
const [userInfo,setUserInfo]=useState([])
useEffect(()=>{
    axios.get('http://dct-user-auth.herokuapp.com/users/account',{
        headers:{
            'x-auth':localStorage.getItem('token')
        }
    })
    .then((response)=>{
        console.log(response.data)
        setUserInfo(response.data)
    })
    .catch((error)=>{
        alert(error.message)
    })
},[])
    return(
        <div>
            <h2>User Account details</h2>
            <p>Name-{userInfo.username}</p>
            <p>Email-{userInfo.email}</p>
        </div>
    )
}
export default Account