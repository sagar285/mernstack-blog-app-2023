import React,{useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate =useNavigate();
    const userlogin =async(e)=>{
      e.preventDefault();
      const response = await axios.post("http://localhost:4000/login",{
        email,password,withCredentials:true,
      })
      if(response.status===200){
        navigate("/");
      }else{
        alert("login failed,pls fill corect detail");
      }
    }


  return (
    <div>
        <form className='register'>
        <input type="email"
         placeholder='enter email'
         value={email}
         onChange={e=>setemail(e.target.value)}  />
        <input type="password"
         placeholder='enter password'
         value={password}
         onChange={e=>setpassword(e.target.value)}  />
        <button onClick={userlogin} >Login</button>
    </form>
    </div>
  )
}

export default Login