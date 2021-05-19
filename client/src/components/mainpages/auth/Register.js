import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Footer from '../products/Footer'



export default function  () {
    const [user,setUser] = useState({
        neam:'',email:'',password:''
    })
    const onChangeInput = e =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
    }
    const registerSubmit = async e =>{
        e.preventDefault()
        console.log({...user})
      
        try {
            await axios.post('/user/register',{...user})
          
            localStorage.setItem('firstLogin',true)
            window.location.href ="/login"
    
            
        } catch (err) {
            alert(err.response.data.msg)
            
        }
    }
    return (
        <div className="hi">
        <div  className="mt-3 login-page ">
            <form onSubmit={registerSubmit}>
            <h2 className="text-center my-3">Register</h2>
            <div className="form-group">
                <input type="text" className="form-control" name="name" required placeholder="Name" onChange={onChangeInput} value={user.name}></input>

                </div>
                <div className="form-group">
                <input type="email" className="form-control" name="email" required placeholder="Email" onChange={onChangeInput} value={user.email}></input>

                </div>
                <div className="form-group">
                <input type="password" autoComplete="on"  className="form-control" name="password" required placeholder="password"  onChange={onChangeInput} value={user.password}></input>

                </div>
            <div className="row">
                <div className="col-6">
                <button className="form-control " type="submit">Register</button>

                </div>
                <div className="col-6">                <Link to="/login">Login</Link>
</div>
</div>
            

            </form>
        </div>
          <Footer/>
        </div>
    )
}
