import React,{useEffect, useState} from 'react'
import NavBar from './Components/NavBar'
const App=(props)=>{
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const handleAuth=()=>{
    setIsLoggedIn(!isLoggedIn)
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])
  return(
    <div>
      <h1>Dct Academy</h1>
      <NavBar handleAuth={handleAuth} isLoggedIn={isLoggedIn}/>
    </div>
  )
}
export default App