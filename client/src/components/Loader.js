import React from 'react'
import loader from '../img/Search.gif'
import { validateYupSchema } from 'formik'
export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
    <img src={loader} alt="loader" style={{ width: '80px', height: '80px' }} />
  </div>
  )
}
