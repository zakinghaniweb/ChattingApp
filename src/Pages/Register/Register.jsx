"use client"
import "./register.css"
import React, { useEffect, useState } from 'react'
import { FaRegEye,  } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { FiUser } from "react-icons/fi"
import axios from 'axios'
import { Link, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Slide, toast } from "react-toastify"

const Register = () => {
  // State Vars =>
  const [showPass,setShowPass] = useState(true)
  const [registerData,setRegisterData] = useState({userName: "", email: "", gender: "", phone: "", password: ""})
  const [resErr,setResErr] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userSelector = useSelector((state)=>state.User.value)
  // Functions =>
  const handleRegister = (e)=>{
    e.preventDefault()
    axios.post("http://localhost:8000/auth/register", registerData)
    .then(res => {
      toast.success('An OTP was sent to your email', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
      });
      navigate("/otpVerify")
      // dispatch(userInfo(res.data))
      // localStorage.setItem("userInfo", JSON.stringify(res.data))
    })
    .catch(err => {
      setResErr(err.response.data)
    })
  }
  return (
    <div className='flex justify-center items-center h-screen bg-[#E8EDF2]'>
        <div className="register">
            <div className="register-row">
                <div className="register-head">
                  <div className="register-logo">
                    <img src="images/logo2.png" alt="Logo" />
                  </div>
                  <h1>Create an account</h1>
                  <p>Interact with people!</p>
                </div>
                <div className="register-form">
                  {
                    resErr &&
                    <div className="alert"><p>{resErr}</p></div>
                  }
                  <form onSubmit={handleRegister}>
                      <label htmlFor="username">Username</label>
                      <div className="flex gap-[20px]">
                        <div className="register-input-group">
                            <input onChange={(e)=>{setRegisterData(prev=>({...prev, userName: e.target.value }))}} type="text" id="username" placeholder='First name'/>
                            <i><FiUser /></i>
                        </div>
                      </div>
                      <label htmlFor="email">E-mail</label>
                    <div className="register-input-group">
                      <input onChange={(e)=>{setRegisterData(prev=>({...prev, email: e.target.value })), setResErr("")}} type="text" id='email' placeholder='Email'/>
                      <i><MdMailOutline /></i>
                    </div>
                      <label htmlFor="password">Password</label>
                    <div className="register-input-group">
                      <input onChange={(e)=>{setRegisterData(prev=>({...prev, password: e.target.value })), setResErr("")}} type={showPass?"password":"text"} id='password' placeholder='Password'/>
                      <i className='cursor-pointer' onClick={()=>setShowPass(!showPass)}><FaRegEye /></i>
                    </div>
                      <label htmlFor="phone">Phone</label>
                    <div className="register-input-group">
                      <input onChange={(e)=>{setRegisterData(prev=>({...prev, phone: e.target.value })), setResErr("")}} id='phone' placeholder='Phone'/>
                    </div>
                    <label>Gender</label>
                    <div className="flex gap-[20px] pt-[5px]">
                      <div className="w-full flex items-center border-[2px] border-gray-200 rounded-lg pl-[12px]">
                          <input id="bordered-radio-1" checked={registerData.gender === "male"} onChange={()=>setRegisterData({ ...registerData, gender: "male" })} type="radio" name="bordered-radio" className="w-4 h-4 accent-blue-500"/>
                          <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium font-poppins text-gray-500">Male</label>
                      </div>
                      <div className="w-full flex items-center border-[2px] border-gray-200 rounded-lg pl-[12px]">
                          <input id="bordered-radio-2" checked={registerData.gender === "female"} onChange={()=>setRegisterData({ ...registerData, gender: "female" })} type="radio" name="bordered-radio" className="w-4 h-4 accent-pink-500"/>
                          <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium ">Female</label>
                      </div>
                    </div>
                      {/* <label htmlFor="confirm">Confirm Password</label>
                    <div className="register-input-group">
                      <input type={showPass?"password":"text"} id='confirm' placeholder='Password'/>
                      <i className='cursor-pointer' onClick={()=>setShowPass(!showPass)}><FaRegEye /></i>
                    </div> */}
                  <Link href={"#"} className='block my-[20px] font-poppins font-normal text-[12px] text-[#8083A3] text-end'>Forgot password?</Link>
                    <button type='submit' className='register-submit'>Sign Up</button>
                  </form>
                </div>
                <p className='font-poppins font-normal text-[14px] text-[#07070C] text-center mt-[30px]'>Already have an account?<Link href={"#"} className='text-brandColor'> Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register