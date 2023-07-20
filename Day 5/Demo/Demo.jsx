import React from 'react'
import './demo.css'
import { useState } from 'react'


function Demo() {
const authuser='hello'
const authpass='hi'
const [formdata, setFormdata] =useState({
    
    username:'',
    password:'',
    email:'',
    phone:0
})    
const handleChange = (e)=>{
    e.preventDefault();
    setFormdata({...formdata,[e.target.id]:e.target.value});

}
const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(formdata.username)
    if(formdata.username == authuser && formdata.password == authpass){
        alert ('sdfdf');
    }
    else{
        alert ('invalid');
    }

}
    return (
        <div>

            <div className="auth-container">
                <form className='auth-form' onSubmit={handleSubmit}>
                    <h1 className="auth-title">Sign up</h1>
                    <input type="text" name="username" id="username" placeholder="Username" className='input-field' onChange={handleChange}/>
                    <input type="password" name="password" id="password" placeholder='password' className='input-field' onChange={handleChange}/>
                    <input type="email" name="email" id="email" placeholder='email' className='input-field' onChange={handleChange}/>
                    <input type="number" name="phone" id="phone" placeholder='phone' className='input-field' onChange={handleChange}/>
                    <button type="submit" className='input-btn'>Register</button>
                </form>
            </div>


        </div>
    )
}

export default Demo
