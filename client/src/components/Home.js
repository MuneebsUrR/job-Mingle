import React, { useEffect, useState } from 'react';
import JobItems from './JobItems';
import '../App.css'

import searchbar from '../img/searchbar.png'
import JobDetails from './JobDetails';
import {  useJobDetailContext } from '../context/JobDeatailContext';


export default function Home() {
  
  const { fetchDatafromAPI, what, where,setwhat, setwhere, allJobsData, setAllJobsData } = useJobDetailContext();
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
   
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchDatafromAPI();
    setwhat('');
    setwhere('');
  }
 
  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };
  return (
    <>

      <div className="wrapper">

      </div>

      <div className="container-fluid search-bar">
        <div className="row" id='tagline-text'>
          <div className="col-12 ">
            <img src={searchbar} className="img-fluid" alt="" />
          </div>
        </div>

        <form className='my-4' onSubmit={handleSubmit}>

          <div className="row ">

            <div className="col-md-5 d-flex align-items-center input-container">
              <span className="label">What</span>
              <input
                className='form-control my-3'
                type="text"
                placeholder='Job title, keywords'
                style={{ paddingLeft: '60px' }}
                value={what}
                onChange={(e) => setwhat(e.target.value)}
              />
              <i class="fa fa-search search"  aria-hidden="true"></i>
            </div>
            <div className="col-md-5 d-flex align-items-center input-container">
              <span className="label">Where</span>
              <input
                className='form-control my-3'
                type="text"
                placeholder='Country, City'
                style={{ paddingLeft: '62px' }}
                value={where}
                onChange={(e) => setwhere(e.target.value)}
              />
              <i class="fa fa-map-marker loc" aria-hidden="true"></i>

            </div>
            <div className="col-md-2 ">
              <button type='submit' className='btn btn-success w-100  my-3' > Search</button>
            </div>

          </div>
        </form>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            {

              allJobsData.length > 0 && allJobsData.map(
                (data,index) => {
                  return (
                    <div
                    className={`job-cards ${
                      selectedCardIndex === index ? 'card-container-css' : ''
                    }`}
                    id="job-cards"
                    key={data.job_apply_link}
                    onClick={() => handleCardClick(index)}
                  >

                      <JobItems job_id_no= {data.job_id} highlights={data.job_highlights} employer_web={data.employer_website} job_employment_type={data.job_employment_type} salary_currency = {data.job_salary_currency} min_salary = {data.job_min_salary} max_salary = {data.job_max_salary} job_remote={data.job_is_remote} job_publisher = {data.job_publisher} employer_name = {data.employer_name} employer_logo = {data.employer_logo} job_id={data.job_id} job_city={data.job_city} job_country={data.job_country} job_title={data.job_title} job_description={data.job_description} job_apply_link={data.job_apply_link} />
                    </div>
                  )
                }
              )

            }

          </div>
          <div className="col-md-7">
            <JobDetails />
          </div>

        </div>
      </div>

    </>
  );
}
