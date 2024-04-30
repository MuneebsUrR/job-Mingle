import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../img/logo.png'
import '../App.css'
import { useJobDetailContext } from '../context/JobDeatailContext'
export default function Register() {
    const { setLoginUser,fetchDatafromAPI } = useJobDetailContext();
 
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({
        email: '',
        password: '',
    });
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    email: credentials.email,
                    password: credentials.password,
                }
            )
        })

        const data = await response.json()
        if (data.status === 'ok') {
            setLoginUser(credentials.email)
     
            navigate('/home')

        } else if (!response.ok) { alert('Please Enter a valid email address and password') }
        console.log(data)
    }

    return (
        <>
            <>

                <div className="col-12 text-center" id='img-wrapper' >
                    <img className='img-fluid' src={logo} alt="logo" style={{ width: '250px', height: '250px' }} id='logo' />
                </div>

                <div className='container' id='login'>



                    <div className="row" id='loginRow'>
                        <form onSubmit={HandleSubmit} >
                            <p className='h2 mb-4'>Welcome Back!</p>
                            <label className='text-light' htmlFor="email">Email</label>
                            <input className='form-control form-control-lg ' style={{ width: '100%' }} type="email" value={credentials.email} name='email' onChange={onchange} placeholder='Enter your email address' /><br />
                            <label className='text-light' htmlFor="password ">Password</label>
                            <input className='form-control form-control-lg' type="password" value={credentials.password} name='password' onChange={onchange} placeholder='Enter your password' />
                            <button type='submit' className='btn btn-dark btn-lg my-4 w-100'>Login</button>
                        </form>
                    </div>

                </div>

            </>
        </>
    )
}
