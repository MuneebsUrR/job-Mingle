import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
export default function Register() {
    const navigate = useNavigate();
    const [credentials, setcredentials] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        password: '',
    });
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:5000/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    firstname: credentials.firstname,
                    lastname: credentials.lastname,
                    contact: credentials.contact,
                    email: credentials.email,
                    password: credentials.password,
                }
            )
        })

        const data = await response.json()
        if (data.status === 'ok') {
            navigate('/login')
        } else if (!response.ok) { alert('User already exist') }
        console.log(data)
    }

    return (
        <>

            <div className="col-12 text-center" id='register-img-wrapper' >
                <img src={logo} alt="logo" style={{ width: '250px', height: '250px' }} id='logo' />
            </div>

            <div className='container' id='register'>



                <form onSubmit={HandleSubmit} >
                    <p className='h2 mb-4'>Create Your Account</p>
                    <div className="row">

                        <div className="col-6">
                            <input className='form-control' type="text" value={credentials.firstname} name='firstname' onChange={onchange} placeholder='Your first name' />
                        </div>
                        <div className="col-6">

                            <input className='form-control' type="text" value={credentials.lastname} name='lastname' onChange={onchange} placeholder='Your last name' /><br />
                        </div>
                    </div>

                    <input className='form-control' type="tel" value={credentials.contact} name='contact' onChange={onchange} placeholder='Enter your phone number' /><br />
                    <input className='form-control' type="email" value={credentials.email} name='email' onChange={onchange} placeholder='Enter your email address' /><br />
                    <input className='form-control' type="password" value={credentials.password} name='password' onChange={onchange} placeholder='Enter your password' />
                    <button type='submit' className='btn btn-dark btn-lg my-4 w-100'>Register</button>
                    <div className="d-flex justify-content-center align-items-center my-1">
                        <hr className="flex-grow-1 m-0" />
                        <span className="px-2 bg-light" style={{ borderRadius: '20px' }}>or</span>
                        <hr className="flex-grow-1 m-0" />
                    </div>




                    <p className='text-center fs-5' style={{ margin: '0px' }} >Already a user? <Link to='/login' style={{ color: '#2a34a4' }} >Log In</Link></p>
                </form>

            </div>

        </>
    )
}
