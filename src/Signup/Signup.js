import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    //console.log(process.env.REACT_APP_BACKEND_URL)
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [mobile,setMobile]=useState('')
    function handleSubmit(e){
        e.preventDefault()
        const newUser={name,password,email,mobile}
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,newUser)
        .then((res)=>{
            console.log(res)
            if(res.status===201)
                navigate('/login')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Enter Your Name:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Enter Your Email:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Enter Your Password:</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label>Enter Phone number:</label>
                    <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)} required/>
                </div>
                <button>Signup</button>
            </form>
        </div>
    )
}
