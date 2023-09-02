import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import {useFormik} from 'formik'
import { signUpSchema } from '../schemas/yupschema'

const intitialValues = {
    firstname: '',
    lastname: '',
    contact: '',
    email: '',
    password: '',
    confirmpassword:''
}
export default function Register() {
    const navigate = useNavigate();
    const {values, errors,touched, handleChange, handleBlur, handleSubmit} = useFormik({
        initialValues:intitialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values)=>{
            const response = await fetch('http://127.0.0.1:5000/api/register', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(
                            {
                                firstname: values.firstname,
                                lastname: values.lastname,
                                contact: values.contact,
                                email: values.email,
                                password: values.password,
                            }
                        )
                    })
            
                    const data = await response.json()
                    if (data.status === 'ok') {
                        navigate('/login')
                    } else if (!response.ok) { alert('User already exist') }
                    console.log(data)
        }
    })
    // const [credentials, setcredentials] = useState({
    //     firstname: '',
    //     lastname: '',
    //     contact: '',
    //     email: '',
    //     password: '',
    //     confirmpassword:'',
    // });
    // const onchange = (e) => {
    //     setcredentials({ ...credentials, [e.target.name]: e.target.value })
    // }
    // const HandleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('http://127.0.0.1:5000/api/register', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(
    //             {
    //                 firstname: credentials.firstname,
    //                 lastname: credentials.lastname,
    //                 contact: credentials.contact,
    //                 email: credentials.email,
    //                 password: credentials.password,
    //             }
    //         )
    //     })

    //     const data = await response.json()
    //     if (data.status === 'ok') {
    //         navigate('/login')
    //     } else if (!response.ok) { alert('User already exist') }
    //     console.log(data)
    // }

    return (
        <>

            <div className="col-12 text-center" id='register-img-wrapper' >
                <img src={logo} alt="logo" style={{ width: '250px', height: '250px' }} id='logo' />
            </div>

            <div className='container' id='register'>



                <form onSubmit={handleSubmit} >
                    <p className='h2 mb-4'>Create Your Account</p>
                    <div className="row">

                        <div className="col-6">
                            <input className='form-control' type="text" value={values.firstname} name='firstname' onChange={handleChange} onBlur={handleBlur} placeholder='Your first name' />
                            {errors.firstname && touched.firstname ? <p className='text-danger form-error'>{errors.firstname}</p>:null }
                        </div>
                        <div className="col-6">
                            <input className='form-control' type="text" value={values.lastname} name='lastname' onChange={handleChange} onBlur={handleBlur} placeholder='Your last name' />
                            {errors.lastname && touched.lastname ? <p className='text-danger form-error'>{errors.lastname}</p>:null }
                        </div>

                    </div>
                    <br />
                  
                    <input className='form-control' type="tel" value={values.contact} name='contact' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your phone number' />
                    {errors.contact && touched.contact ? <p className='text-danger form-error'>{errors.contact}</p>:null }
                    <br />
                    <input className='form-control' type="email" value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your email address' />
                    {errors.email && touched.email ? <p className='text-danger form-error'>{errors.email}</p>:null }
                    <br />
                   <div className="row">
                    <div className="col-6">

                    <input className='form-control' type="password" value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} placeholder='Enter your password' />
                    {errors.password && touched.password ? <p className='text-danger form-error'>{errors.password}</p>:null }
                    </div>
                    <div className="col-6">
                    <input className='form-control' type="password" value={values.confirmpassword} name='confirmpassword' onChange={handleChange} onBlur={handleBlur} placeholder='confirm your password' />
                    {errors.confirmpassword && touched.confirmpassword ? <p className='text-danger form-error'>{errors.confirmpassword}</p>:null }
                    </div>
                   </div>
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
