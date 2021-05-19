import React from 'react'
import {Link,Route,withRouter} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Notes from './Notes'
const NavBar=(props)=>{
    const {handleAuth,isLoggedIn}=props
    return(
        <div>
        {isLoggedIn?(
            <ul>
            <div class="row g-3">
                <div class="col-md-1">
                <li><Link to="/Home">Home</Link></li>
                </div>
                <div class="col-md-1">
                <li><Link to="/Account">Account</Link></li>
                </div>
                <div class="col-md-1">
                <li><Link to="/notes">Notes</Link></li>
                </div>
                <div class="col-md-1">
                <li onClick={()=>{
                alert('You have successfully logged out')
                props.history.push('/Home')
                localStorage.removeItem('token')
                handleAuth()
            }}><Link to="/Home">LogOut</Link></li>
                </div>
            
            </div>
        </ul>
    ):(
        <ul>
                <div class="row g-1">
                    <div class='col-md-4'>
                    <li><Link to="/Home">Home</Link></li>
                    </div>
                    <div class='col-md-4'>
                    <li><Link to="/Register">Register</Link></li>
                    </div>
                    <div class='col-md-4'>
                    <li><Link to="/Login">Login</Link></li>
                    </div>
                </div>
      </ul> 
    )}
    <Route path="/Home" component={Home}/>
    <Route path="/Register" component={Register}/>
    <Route path="/Login" render={(props)=>{
        return(
            <Login
            {...props}
            handleAuth={handleAuth}/>
        )
    }}/>
    <Route path="/Account" component={Account}/>
    <Route path="/notes" component={Notes}/>
    </div>
    )

        
}
export default withRouter(NavBar)