import React, { useEffect, useState } from 'react'
import '../App.css'
import { useJobDetailContext } from '../context/JobDeatailContext';

export default function JobItems(props) {

  const {jobDetails, setJobDetails } = useJobDetailContext();

  const handleclick = () => {
    setJobDetails({...jobDetails,
       Comp_logo:props.employer_logo,
       Comp_name: props.employer_name,
       Comp_description: props.job_description,
       Comp_web:props.employer_web,
       city:props.job_city,
       country: props.job_country,
       jobTitle: props.job_title,
       remote:props.job_remote,
       job_employment_type:props.job_employment_type,
       min_salary:props.min_salary,
       max_salary:props.max_salary,
       salary_currency:props.salary_currency,
       highlights:props.highlights,
       job_apply_link:props.job_apply_link,
      });
     
        
  }


  const renderLogoOrIcon = () => {
    if (props.employer_logo) {
      return (
        <img src={props.employer_logo} className='img-fluid mx-2' style={{ width: '46px' }} alt="" />
      );
    } else {
      return (
        <i className="fa fa-building-o img-fluid mx-3" style={{ fontSize: '35px' }} aria-hidden="true"></i>
      );
    }
  };

  const JobSalaryDetails = () => {
    if (props.min_salary && props.max_salary && props.salary_currency) {
      return (
        <p className='badge bg-dark fw-bold'>{`${props.min_salary}${props.salary_currency} - ${props.max_salary}${props.salary_currency}`}</p>
      )
    }
    else {
      return null;
    }
  }

  
  return (
    <>


      <div className='card-container'
      style={{ cursor: 'pointer' }}
      onClick={handleclick}
      id={`card-${props.job_id_no}`} >
        <div className='card my-4'>

          <div className="card-body">
            <div className="company-details d-flex">
              <div>{renderLogoOrIcon()}</div>

              <h6 className='align-self-center'>{props.employer_name}</h6>
            </div>

            <h6 className='fs-5 my-1 mx-1'>{props.job_title}</h6>
            <p className='mx-1 fw-bold'>{props.job_city ? (`${props.job_city}`) : ''} {props.job_city && <i className="fa fa-map-marker" aria-hidden="true"></i>}</p>
            {JobSalaryDetails()}<br />
            {
              props.job_remote ? (<span className="badge rounded-pill bg-light text-dark">Remote</span>
              ) : ''

            }
            {props.job_publisher ? (<span className="badge rounded-pill bg-light text-dark mx-2">{props.job_publisher}</span>
            ) : ''}
            {
              props.job_employment_type ? (<span className="badge rounded-pill bg-light text-dark mx-2">{props.job_employment_type.toLowerCase()}</span>
              ) : ''
            }

          </div>

        </div>
      </div>


    </>

  )
}
