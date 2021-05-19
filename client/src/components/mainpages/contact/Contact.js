import React,{useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Footer from '../products/Footer'
import swal from 'sweetalert'

function Contact() {
    const [msg,setMsg] = useState({
        firstname:'',lastname:'',email:'',subject:'',message:''
    })
    const onChangeInput = e =>{
        const {name,value} = e.target;
        setMsg({...msg,[name]:value})
    }
    const messageSubmit = async e =>{
        e.preventDefault()
        console.log({...msg})
      
        try {
          const res = await axios.post('/api/message',{...msg}).then(res =>{
          
     //  alert(res.data.msg)
            swal({
                title: "Good job!",
                text: `${res.data.msg}`,
                icon: "success",
                button: "ok",
              })
            // window.location.href ="/"
            setMsg({...msg, firstname:'',lastname:'',email:'',subject:'',message:''})
          }
         
        )
        } catch (err) {
            alert(err.response.data.msg)
            
        }
    }
    return (
        <div className="hi">
        <div  className="mt-3 login-page ">
        <form onSubmit={messageSubmit}>
        <h2 className="text-center my-2">Get In Touch</h2>
        <div className="row">

        <div className="form-group col-6">
            <input type="text" className="form-control" name="firstname" required placeholder="Firstname" onChange={onChangeInput} value={msg.firstname}></input>

            </div>
            <div className="form-group col-6">
            <input type="text" className="form-control" name="lastname" required placeholder="Lastname" onChange={onChangeInput} value={msg.lastname}></input>

            </div>
            <div className="form-group col-6">
            <input type="email" className="form-control" name="email" required placeholder="Email" onChange={onChangeInput} value={msg.email}></input>

            </div>
            <div className="form-group col-6">
            <input type="text" className="form-control" name="subject" required placeholder="Subject" onChange={onChangeInput} value={msg.subject}></input>

            </div>
            <div className="form-group col-12">
                <textarea className="form-control" name="message" onChange={onChangeInput} placeholder="Message" required value={msg.message}></textarea>

            </div>
          
            <div className="col-6">
            <button className="form-control " type="submit">Send Message</button>      
</div>
</div>
        

        </form>
        </div>
        <Footer/>
    </div>
    )
}

export default Contact
