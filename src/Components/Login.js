import React, { useState } from 'react'

export default function LogIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const emailpattern  = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/;
  const [errors, setErrors] = useState({
    email:"",
    password:""
  })
  function submitHandler(){
    if(email.trim()===""){
      setErrors((errors)=>({...errors,email:"email is required!"}))
    }
    else if(!emailpattern.test(email)){
      setErrors((errors)=>({...errors,email:"please enter a valid email address..!"}))
    }
    else{
      setErrors((errors)=>({...errors,email:""}))

    }
    if(password.trim()===""){
      setErrors((errors)=>({...errors,password:"password is required!"}))
    }
    else if(password.trim().length>6){
      setErrors((errors)=>({...errors,password:"password should be minimum 6 characters!"}))
    }
    else{
      setErrors((errors)=>({...errors,password:""}))
    }
    
  }
  
  return (
    <div className='form-div'>
      
        <h1>Login/signin</h1>
        <div className="elements">
          <label htmlFor="">Mobile Number:</label>
          <input type="email" placeholder='mobile number' value={email} onChange={(e)=>{
           setEmail(e.target.value)
           console.log(e.target.type)
          }}/>
          {
            (errors.email)?(<p className='text-danger'>{errors.email}</p>):null
          }

        </div>
        <div className="element">
          <label htmlFor="">Enter OTP:</label>
          <input type="password" placeholder='OTP' onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          {
            (errors.password)?(<p className='text-danger'>{errors.password}</p>):null
          }
        </div>
        <input onClick={submitHandler} className='button' type="submit" value="LogIn" />
          
    </div>
  )
}