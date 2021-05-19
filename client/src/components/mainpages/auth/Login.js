import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Footer from '../products/Footer'



export default function Login() {
    const [user,setUser] = useState({
        email:'',password:''
    })
    const onChangeInput = e =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const loginSubmit = async e =>{
        e.preventDefault()
        console.log({...user})
      
        try {
            await axios.post('/user/login',{...user})
            localStorage.setItem('firstLogin',true)
            window.location.href ="/shop"
    
            
        } catch (err) {
            alert(err.response.data.msg)
            
        }
    }
    return (
        
          
<div className="hi">

       
        <div className="mt-5 login-page ">
            <h2 className="text-center my-5">Login</h2>
            <form onSubmit={loginSubmit}>
                <div className="form-group">
                <input type="email" className="form-control" name="email" required placeholder="Email" onChange={onChangeInput} value={user.email}></input>

                </div>
                <div className="form-group">
                <input type="password" autoComplete="on"  className="form-control" name="password" required placeholder="password"  onChange={onChangeInput} value={user.password}></input>

                </div>
            <div className="row">
                <div className="col-6">
                <button className="form-control "type="submit">Login</button>

                </div>
                <div className="col-6">
                <Link to="/register">Register</Link>


                </div>
</div>
            

            </form>
            
        </div>
        <Footer/>
        </div>
    )
}
