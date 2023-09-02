import React from 'react';
import { useJobDetailContext } from '../context/JobDeatailContext';
const JobDetails = () => {
    const { allJobsData,jobDetails}= useJobDetailContext();

 

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


    return ( 
        <>
        { allJobsData.length>0 &&

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

</>
    );
}

export default JobDetails;
