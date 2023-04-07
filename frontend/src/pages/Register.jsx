import React,{useState} from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom"

const Register = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate =useNavigate();

    const usersubmit =async(e)=>{
        e.preventDefault();
        if(!name || !email || !password){
             toast.error("all field are compulsory");
        }
        else if(!email.includes("@")){
            toast.error("enter correct email address");
        }

        const response =await axios.post("http://localhost:4000/register",{
            name,email,password
        })
        console.log(response);
        if(response.status===200){
            navigate("/login");
        }
    }
  return (
    <>
    <form className='register'>
        <input type="text"
         placeholder='enter name'
         value={name}
         onChange={e=>setname(e.target.value)} />
        <input type="email"
         placeholder='enter email'
         value={email}
         onChange={e=>setemail(e.target.value)}  />
        <input type="password"
         placeholder='enter password'
         value={password}
         onChange={e=>setpassword(e.target.value)}  />
        <button onClick={usersubmit}>Register</button>
    </form>
    <ToastContainer />
    </>
  )
}

export default Register