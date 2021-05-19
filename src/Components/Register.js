import React ,{useState} from 'react'
import validator from 'validator'
import axios from 'axios'
const Register=(props)=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errors,setErrors]=useState({})
    const error={}
    const handleUserName=(e)=>{
        setName(e.target.value)
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    const errorValidation=()=>{
        if(name.length===0){
            error.name="Name Cannot be Blank"
        }
        if(email.length===0){
            error.email="Name Cannot be Blank"
        }else if(!validator.isEmail(email)){
            error.email="Invalid Email format"
        }
        if(password.length===0){
            error.password="Password cannnot be Blank"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        errorValidation()
        if(Object.keys(error).length===0){
            const data={
                username:name,
                email:email,
                password:password
            }
        //console.log(data)
        axios.post('http://dct-user-auth.herokuapp.com/users/register',data)
             .then((response)=>{
                 const result=response.data
                 if(result.hasOwnProperty('errors')){
                     alert(result.errors.email.message)
                     console.log(result.errors.email)
                 }else{
                     alert('You have successfully created an account')
                     console.log(result)
                     props.history.push('/Login')
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
        props.history.push("/Home")
    }
    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <div class="col-md-3">
                <h2>Register With Us</h2>
                <input type="text" value={name} onChange={handleUserName} placeholder="Enter UserName" class="form-control" /><br/>
                {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
                <input type="text" value={email} onChange={handleEmailChange} placeholder="Enter Email" class="form-control"/><br/>
                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter Password" class="form-control"/><br/>
                {errors.password &&<span style={{color:'red'}}>{errors.password}</span>}
                </div>
                <div class="col-md-3">
                <input type="submit" value="Register" class="btn btn-primary"/>
                <button class="btn btn-primary" onClick={handleCancel}>Cancel</button>
                </div>
                
            </form>
        </div>
    )
}
export default Register