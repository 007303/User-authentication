import React,{useState} from 'react'
import axios from 'axios'
import validator from 'validator'
const  Login=(props)=>{
    const {handleAuth}=props
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({})
    const error={}
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const errorValidation=()=>{
        if(email.length===0){
            error.email="Email Cannot be Blank"
        }else if(!validator.isEmail(email)){
            error.email="Invalid Email Id"
        }
        if(password.length===0){
            error.password="Password cannot be Blank"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        errorValidation()
        if(Object.keys(error).length===0){
            const data={
                email:email,
                password:password
            }
            console.log(data)
        axios.post("http://dct-user-auth.herokuapp.com/users/login",data)
             .then((response)=>{
                 const result=response.data
                 console.log(result.token)
                 if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                }else{
                   alert('You have successfully logged In')
                   localStorage.setItem('token',result.token)
                   handleAuth()
                   props.history.push("/Home")
                }
                 
             })
             .catch((error)=>{
                 alert(error.message)
             })
        }else{
            setErrors(error)
        }
        
    }
    const handleCancel=()=>{
        props.history.push('/Home')
    }
    return(
        <div>
            <h2>Login to your account</h2>
            <form onSubmit={handleSubmit}>
                <div class="col-md-2">
                <input type="text" value={email} onChange={handleEmail} placeholder="email" class="form-control" /><br/>
                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
                </div>
                <div class="col-md-2">
                <input type="password" vaue={password} onChange={handlePassword} placeholder="password" class="form-control"/><br/>
                {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
                </div>
                <div class='col-md-6'>
                <input type="submit" value="Login" class="btn btn-primary"/>
                <button onClick={handleCancel} class="btn btn-primary">Cancel</button>
                </div>
            </form>
            
        </div>
    )
}
export default Login