import React, { useEffect, useState } from 'react'
import '../App.css'
import { useJobDetailContext } from '../context/JobDeatailContext';
import useWindowSize from './useWindowSize';

export default function JobItems(props) {

  
  const JobSalaryDetail = () => {
    if (jobDetails.min_salary && jobDetails.max_salary && jobDetails.salary_currency) {
      return (
        <p className='badge bg-dark fw-bold'>{`${jobDetails.min_salary}${jobDetails.salary_currency} - ${jobDetails.max_salary}${jobDetails.salary_currency}`}</p>
      )
    }
    else {
      return null;
    }
  }


   const location = ()=>{
    if(jobDetails.country && jobDetails.city){
        return (  <p> {`${jobDetails.city}, ${jobDetails.country}`}  </p> )
    }
    else {
        return( <p>  {`${jobDetails.country}`}  </p> )
    }
   }
   const JobSalaryDetails = () => {
    if (jobDetails.min_salary && jobDetails.max_salary && jobDetails.salary_currency) {
      return (
        <p className='badge bg-dark fw-bold'>{`${jobDetails.min_salary}${jobDetails.salary_currency} - ${jobDetails.max_salary}${jobDetails.salary_currency}`}</p>
      )
    }
    else {
      return null;
    }
  }

  const {jobDetails, setJobDetails,allJobsData } = useJobDetailContext();
  const windowSize = useWindowSize();
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



  
  return (
    <>

{windowSize.width >= 992 ? (
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
            {/* {JobSalaryDetails()}<br /> */}
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

) : (
  <>
   <div className='card-container'
      style={{ cursor: 'pointer' }}
        onClick={handleclick}
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      id={`card-${props.job_id_no}`} >
        <div className='card my-4'>

          <div className="card-body">
            <div className="company-details d-flex">
              <div>{renderLogoOrIcon()}</div>

              <h6 className='align-self-center'>{props.employer_name}</h6>
            </div>

            <h6 className='fs-5 my-1 mx-1'>{props.job_title}</h6>
            <p className='mx-1 fw-bold'>{props.job_city ? (`${props.job_city}`) : ''} {props.job_city && <i className="fa fa-map-marker" aria-hidden="true"></i>}</p>
            {JobSalaryDetail()}<br />
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
            

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      { allJobsData &&  allJobsData.length>0 &&

<div className='card my-4' >
   
    <div className="card-body">
        <h4>Job Details</h4><hr />
        <div className="header d-flex justify-content-between">
        <h5 className='text-secondary'>{jobDetails.jobTitle}</h5>
        <button className='btn btn-success'>Apply Now</button>
        </div>
       {location()}
       {JobSalaryDetails()}<br />

        <a className='text-secondary' href={jobDetails.Comp_web} rel="noreferrer" target='_blank'>{jobDetails.Comp_name}:</a><br />
        { jobDetails.remote ? (<span className="badge rounded-pill bg-light text-dark my-2 mx-2">Remote</span>
    ) : ''}
        { jobDetails.job_employment_type ? (<span className="badge rounded-pill bg-light text-dark my-2 mx-2">{jobDetails.job_employment_type}</span>
    ) : ''}
        <p>{jobDetails.Comp_description}</p>
        <h6>Job Highlights</h6>
        
    </div>

</div>
}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
            
          </> // Render nothing if the screen width is less than 992px


          
)}



    </>

  )
}
