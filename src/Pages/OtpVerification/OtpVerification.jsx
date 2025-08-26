import React, { useState } from 'react'
import './OtpVerification.css'
import { Link } from 'react-router'
import { MdMailOutline } from 'react-icons/md'
import axios from 'axios'

const OtpVerification = () => {
    const [otp, setOtp] = useState("")
    const [err, setErr] = useState("")
    const [succeed, setSucceed] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        if (!otp) return setErr("Please enter an OTP")
        axios.post("http://localhost:8000/auth/verify",{otp})
        .then(res=>{
            setSucceed(res.data)
        })
        .catch(err=>{
            setErr(err.response.data)
        })
    }

  return (
    <div className='flex justify-center items-center h-screen bg-[#E8EDF2]'>
    <div className="otp">
        <div className="otp-row">
            <div className="otp-head">
                <div className="otp-logo">
                <img src="images/logo2.png" alt="Logo" />
                </div>
                <h1>OTP Verification</h1>
                <p>Get your account verified</p>
            </div>
            <div className="otp-form">
            {
                err != "" &&
                <div className="alert"><p>{err}</p></div>
            }
            {
                succeed != "" &&
                <div className="success"><p>{succeed}</p></div>
            }
            <form onSubmit={handleSubmit}>
                <label htmlFor="otp">OTP</label>
                <div className="otp-input-group">
                <input type='text' onChange={e=>{setOtp(e.target.value),setErr("")}} id='otp' placeholder='OTP Code...'/>
                <i><MdMailOutline /></i>
                </div>
                <button type='submit' className='otp-submit'>Submit</button>
            </form>
            </div>
            <p className='font-poppins font-normal text-[14px] text-[#07070C] text-center mt-[20px]'>Don’t have an account?<Link href={"#"} className='text-brandColor'> Sign up</Link></p>
        </div>
    </div>
</div>
  )
}

export default OtpVerification