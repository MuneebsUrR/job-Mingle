import React from 'react';
import '../App.css'
import { useJobDetailContext } from '../context/JobDeatailContext';
const Card = (props) => {
    const {fetchDatafromAPI , setwhat} = useJobDetailContext();
    const handleClick = async()=>{
        setwhat(props.jobTitle);
       await fetchDatafromAPI();
    }
    return (
        <div className='trending-jobs-card' onClick={handleClick}>
                    {props.jobTitle}
         </div>
    );
}

export default Card;
