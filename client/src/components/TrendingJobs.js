import React from 'react';
import '../App.css'
import Card from './Card';


const TrendingJobs = () => {
  
    const trendingJobsData = [
        {
            jobTitle: 'Artificial Intelligence',
            
        },
        {
            jobTitle: 'Data Scientist',

        },
        {
            jobTitle: 'Blockchain Developer',

        },
        {
            jobTitle: 'Cyber Security',

        },
        {
            jobTitle: 'Software Engineers',

        },
        {
            jobTitle: 'Cloud Engineer',

        },
        {
            jobTitle: 'surgeon',
        },
        {
            jobTitle: 'Teacher',
        },{
            jobTitle: 'customer service representative'
        }
    ]

    return (
        <div>
            <h3 className='text-center my-5'>Most Demanding Jobs in 2023</h3>
            <div className="container">
                <div className="row">
                {trendingJobsData.map((data)=>{
                return(
                    <div className="col-md-4">

                        <Card jobTitle = {data.jobTitle}/>
                    </div>)
             })}
                </div>
            </div>
           
        </div>
    );
}

export default TrendingJobs;
